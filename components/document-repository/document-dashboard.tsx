"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DocumentRepository } from "./document-repository"
import { DocumentExplorer } from "./document-explorer"

export function DocumentDashboard() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="repository" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="repository">Document Repository</TabsTrigger>
          <TabsTrigger value="explorer">Folder Explorer</TabsTrigger>
        </TabsList>
        <TabsContent value="repository" className="mt-6">
          <DocumentRepository />
        </TabsContent>
        <TabsContent value="explorer" className="mt-6">
          <DocumentExplorer />
        </TabsContent>
      </Tabs>
    </div>
  )
}
