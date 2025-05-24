"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { AlertCircle, Bell, Clock, Edit, Eye, MessageSquare, Send, Share2, UserPlus, Users } from "lucide-react"

interface User {
  id: string
  name: string
  email: string
  role: string
  avatar?: string
  status: "online" | "away" | "offline" | "editing"
  lastActive?: string
  currentSection?: string
}

interface Comment {
  id: string
  user: User
  content: string
  timestamp: string
  replyTo?: string
  edited?: boolean
  reactions?: { [key: string]: string[] }
}

interface EditHistory {
  id: string
  user: User
  section: string
  timestamp: string
  description: string
}

interface Notification {
  id: string
  type: "comment" | "edit" | "mention" | "share" | "system"
  user?: User
  content: string
  timestamp: string
  read: boolean
  relatedId?: string
}

interface CollaborationProps {
  documentId: string
  documentTitle: string
  currentUser: User
}

export function RealTimeCollaboration({ documentId, documentTitle, currentUser }: CollaborationProps) {
  // Mock active users
  const [activeUsers, setActiveUsers] = useState<User[]>([
    {
      id: "user-1",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Editor",
      avatar: "/stylized-jd-initials.png",
      status: "online",
      lastActive: new Date().toISOString(),
      currentSection: "Financial Summary",
    },
    {
      id: "user-2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Reviewer",
      avatar: "/javascript-code.png",
      status: "editing",
      lastActive: new Date().toISOString(),
      currentSection: "Market Analysis",
    },
    {
      id: "user-3",
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      role: "Viewer",
      avatar: "/abstract-geometric-mj.png",
      status: "away",
      lastActive: new Date(Date.now() - 15 * 60000).toISOString(),
    },
    {
      id: "user-4",
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      role: "Admin",
      status: "offline",
      lastActive: new Date(Date.now() - 120 * 60000).toISOString(),
    },
  ])

  // Mock comments
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "comment-1",
      user: {
        id: "user-2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "Reviewer",
        avatar: "/javascript-code.png",
        status: "online",
      },
      content: "The Q2 projections look promising. Can we add more detail to the regional breakdown?",
      timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
      reactions: {
        "👍": ["user-1", "user-3"],
        "💡": ["user-4"],
      },
    },
    {
      id: "comment-2",
      user: {
        id: "user-1",
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Editor",
        avatar: "/stylized-jd-initials.png",
        status: "online",
      },
      content:
        "I've updated the regional breakdown with more granular data. @Jane Smith please review when you have a moment.",
      timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
      replyTo: "comment-1",
    },
    {
      id: "comment-3",
      user: {
        id: "user-3",
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        role: "Viewer",
        avatar: "/abstract-geometric-mj.png",
        status: "away",
      },
      content: "The competitive analysis section needs more depth. I suggest we include the recent market shifts.",
      timestamp: new Date(Date.now() - 20 * 60000).toISOString(),
    },
  ])

  // Mock edit history
  const [editHistory, setEditHistory] = useState<EditHistory[]>([
    {
      id: "edit-1",
      user: {
        id: "user-1",
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Editor",
        avatar: "/stylized-jd-initials.png",
        status: "online",
      },
      section: "Executive Summary",
      timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
      description: "Updated key performance indicators and growth projections",
    },
    {
      id: "edit-2",
      user: {
        id: "user-2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "Reviewer",
        avatar: "/javascript-code.png",
        status: "editing",
      },
      section: "Market Analysis",
      timestamp: new Date(Date.now() - 60 * 60000).toISOString(),
      description: "Added competitor analysis and market share data",
    },
    {
      id: "edit-3",
      user: {
        id: "user-1",
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Editor",
        avatar: "/stylized-jd-initials.png",
        status: "online",
      },
      section: "Financial Summary",
      timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
      description: "Updated Q2 projections based on latest sales data",
    },
  ])

  // Mock notifications
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "notif-1",
      type: "comment",
      user: {
        id: "user-2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "Reviewer",
        avatar: "/javascript-code.png",
        status: "online",
      },
      content: "Jane Smith commented on the Q2 projections",
      timestamp: new Date(Date.now() - 45 * 60000).toISOString(),
      read: false,
      relatedId: "comment-1",
    },
    {
      id: "notif-2",
      type: "mention",
      user: {
        id: "user-1",
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Editor",
        avatar: "/stylized-jd-initials.png",
        status: "online",
      },
      content: "John Doe mentioned you in a comment",
      timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
      read: true,
      relatedId: "comment-2",
    },
    {
      id: "notif-3",
      type: "edit",
      user: {
        id: "user-2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        role: "Reviewer",
        avatar: "/javascript-code.png",
        status: "editing",
      },
      content: "Jane Smith is editing the Market Analysis section",
      timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
      read: false,
    },
    {
      id: "notif-4",
      type: "system",
      content: "This document will be automatically saved in 5 minutes",
      timestamp: new Date(Date.now() - 1 * 60000).toISOString(),
      read: false,
    },
  ])

  const [newComment, setNewComment] = useState("")
  const [unreadCount, setUnreadCount] = useState(notifications.filter((notif) => !notif.read).length)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update user status
      setActiveUsers((prev) => {
        const newUsers = [...prev]
        const randomIndex = Math.floor(Math.random() * newUsers.length)
        const statuses: ("online" | "away" | "editing")[] = ["online", "away", "editing"]
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]

        if (newUsers[randomIndex].id !== currentUser.id) {
          newUsers[randomIndex] = {
            ...newUsers[randomIndex],
            status: randomStatus,
            lastActive: new Date().toISOString(),
          }
        }

        return newUsers
      })

      // Randomly add a new comment (10% chance)
      if (Math.random() < 0.1) {
        const randomUser = activeUsers[Math.floor(Math.random() * activeUsers.length)]
        if (randomUser.id !== currentUser.id && randomUser.status !== "offline") {
          const newCommentObj: Comment = {
            id: `comment-${Date.now()}`,
            user: randomUser,
            content: `This is a simulated real-time comment from ${randomUser.name}.`,
            timestamp: new Date().toISOString(),
          }

          setComments((prev) => [...prev, newCommentObj])

          // Add notification for the new comment
          const newNotification: Notification = {
            id: `notif-${Date.now()}`,
            type: "comment",
            user: randomUser,
            content: `${randomUser.name} added a new comment`,
            timestamp: new Date().toISOString(),
            read: false,
            relatedId: newCommentObj.id,
          }

          setNotifications((prev) => [newNotification, ...prev])
          setUnreadCount((prev) => prev + 1)
        }
      }
    }, 15000) // Update every 15 seconds

    return () => clearInterval(interval)
  }, [activeUsers, currentUser.id])

  const handleAddComment = () => {
    if (!newComment.trim()) return

    const newCommentObj: Comment = {
      id: `comment-${Date.now()}`,
      user: currentUser,
      content: newComment,
      timestamp: new Date().toISOString(),
    }

    setComments((prev) => [...prev, newCommentObj])
    setNewComment("")

    // Simulate other users seeing the comment
    setTimeout(() => {
      // Add reactions randomly
      if (Math.random() > 0.5) {
        const randomUser = activeUsers.find((u) => u.id !== currentUser.id && u.status !== "offline")
        if (randomUser) {
          const reactions = ["👍", "❤️", "🎉", "💡", "👏"]
          const randomReaction = reactions[Math.floor(Math.random() * reactions.length)]

          setComments((prev) =>
            prev.map((comment) => {
              if (comment.id === newCommentObj.id) {
                return {
                  ...comment,
                  reactions: {
                    ...(comment.reactions || {}),
                    [randomReaction]: [randomUser.id],
                  },
                }
              }
              return comment
            }),
          )
        }
      }
    }, 5000)
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })))
    setUnreadCount(0)
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)

    if (diffMins < 1) return "Just now"
    if (diffMins < 60) return `${diffMins}m ago`

    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours}h ago`

    return date.toLocaleDateString()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500"
      case "editing":
        return "bg-blue-500"
      case "away":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online"
      case "editing":
        return "Editing"
      case "away":
        return "Away"
      default:
        return "Offline"
    }
  }

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "comment":
        return <MessageSquare className="h-4 w-4" />
      case "edit":
        return <Edit className="h-4 w-4" />
      case "mention":
        return <Users className="h-4 w-4" />
      case "share":
        return <Share2 className="h-4 w-4" />
      default:
        return <AlertCircle className="h-4 w-4" />
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Real-Time Collaboration</CardTitle>
            <CardDescription>Collaborate with team members on "{documentTitle}"</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Bell className="h-4 w-4" />
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <div className="w-80">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">Notifications</h3>
                      <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                        Mark all as read
                      </Button>
                    </div>
                    <ScrollArea className="h-64">
                      {notifications.length === 0 ? (
                        <div className="text-center py-4 text-muted-foreground">No notifications</div>
                      ) : (
                        <div className="space-y-2">
                          {notifications.map((notification) => (
                            <div
                              key={notification.id}
                              className={`p-2 rounded-md text-sm ${notification.read ? "bg-background" : "bg-muted"}`}
                            >
                              <div className="flex gap-2 items-start">
                                {notification.user ? (
                                  <Avatar className="h-8 w-8">
                                    <AvatarImage
                                      src={notification.user.avatar || "/placeholder.svg"}
                                      alt={notification.user.name}
                                    />
                                    <AvatarFallback>
                                      {notification.user.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                ) : (
                                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    {getNotificationIcon(notification.type)}
                                  </div>
                                )}
                                <div className="flex-1">
                                  <p>{notification.content}</p>
                                  <div className="flex justify-between items-center mt-1">
                                    <span className="text-xs text-muted-foreground">
                                      {formatTime(notification.timestamp)}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ScrollArea>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Button variant="outline" size="sm">
              <UserPlus className="h-4 w-4 mr-2" />
              Invite
            </Button>
            <Button size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="comments">
          <TabsList className="mb-4">
            <TabsTrigger value="comments">
              <MessageSquare className="h-4 w-4 mr-2" />
              Comments
            </TabsTrigger>
            <TabsTrigger value="activity">
              <Clock className="h-4 w-4 mr-2" />
              Activity
            </TabsTrigger>
            <TabsTrigger value="users">
              <Users className="h-4 w-4 mr-2" />
              Active Users ({activeUsers.filter((u) => u.status !== "offline").length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="comments" className="space-y-4">
            <ScrollArea className="h-[300px] pr-4">
              {comments.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">No comments yet. Start the conversation!</div>
              ) : (
                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div
                      key={comment.id}
                      className={`p-4 rounded-lg border ${comment.replyTo ? "ml-8 mt-[-8px]" : ""}`}
                    >
                      <div className="flex gap-3">
                        <Avatar>
                          <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
                          <AvatarFallback>
                            {comment.user.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{comment.user.name}</span>
                              <span className="text-xs text-muted-foreground">{formatTime(comment.timestamp)}</span>
                              {comment.edited && <span className="text-xs text-muted-foreground">(edited)</span>}
                            </div>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <p className="mt-1">{comment.content}</p>

                          {/* Reactions */}
                          {comment.reactions && Object.keys(comment.reactions).length > 0 && (
                            <div className="flex gap-1 mt-2">
                              {Object.entries(comment.reactions).map(([emoji, users]) => (
                                <Badge key={emoji} variant="outline" className="flex items-center gap-1 py-0 h-6">
                                  <span>{emoji}</span>
                                  <span className="text-xs">{users.length}</span>
                                </Badge>
                              ))}
                              <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full">
                                <span className="text-xs">+</span>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>

            <div className="pt-2 border-t">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src={currentUser.avatar || "/placeholder.svg"} alt={currentUser.name} />
                  <AvatarFallback>
                    {currentUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="min-h-[80px]"
                  />
                  <div className="flex justify-end mt-2">
                    <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                      <Send className="h-4 w-4 mr-2" />
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                {editHistory.map((edit) => (
                  <div key={edit.id} className="flex gap-3 p-3 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={edit.user.avatar || "/placeholder.svg"} alt={edit.user.name} />
                      <AvatarFallback>
                        {edit.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{edit.user.name}</span>
                        <span className="text-xs text-muted-foreground">{formatTime(edit.timestamp)}</span>
                      </div>
                      <p className="text-sm mt-1">
                        Edited <span className="font-medium">{edit.section}</span>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{edit.description}</p>
                    </div>
                  </div>
                ))}

                {comments.map((comment) => (
                  <div key={`activity-${comment.id}`} className="flex gap-3 p-3 border rounded-lg">
                    <Avatar>
                      <AvatarImage src={comment.user.avatar || "/placeholder.svg"} alt={comment.user.name} />
                      <AvatarFallback>
                        {comment.user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{comment.user.name}</span>
                        <span className="text-xs text-muted-foreground">{formatTime(comment.timestamp)}</span>
                      </div>
                      <p className="text-sm mt-1">Added a comment</p>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="users">
            <div className="space-y-3">
              {activeUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(
                          user.status,
                        )}`}
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{user.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {user.role}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <span>{getStatusText(user.status)}</span>
                        {user.status === "editing" && user.currentSection && (
                          <>
                            <span>•</span>
                            <span>Editing {user.currentSection}</span>
                          </>
                        )}
                        {user.lastActive && (
                          <>
                            <span>•</span>
                            <span>
                              {user.status === "online" || user.status === "editing"
                                ? "Active now"
                                : `Last active ${formatTime(user.lastActive)}`}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center justify-between w-full text-sm">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {activeUsers
                .filter((u) => u.status !== "offline")
                .slice(0, 3)
                .map((user) => (
                  <Avatar key={user.id} className="border-2 border-background h-6 w-6">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="text-xs">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                ))}
              {activeUsers.filter((u) => u.status !== "offline").length > 3 && (
                <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center text-xs border-2 border-background">
                  +{activeUsers.filter((u) => u.status !== "offline").length - 3}
                </div>
              )}
            </div>
            <span className="text-muted-foreground">
              {activeUsers.filter((u) => u.status !== "offline").length} active now
            </span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Eye className="h-4 w-4" />
            <span>Real-time updates enabled</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
