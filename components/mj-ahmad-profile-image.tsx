import Image from "next/image"

interface MJAhmadProfileImageProps {
  width?: number
  height?: number
  className?: string
  fill?: boolean
}

export function MJAhmadProfileImage({
  width = 100,
  height = 100,
  className = "",
  fill = false,
}: MJAhmadProfileImageProps) {
  // Ensure we're using the correct image path
  const imagePath = "/mj-ahmad-stylized.png"

  if (fill) {
    return (
      <div className={`relative w-full h-full ${className}`}>
        <Image src={imagePath || "/placeholder.svg"} alt="MJ Ahmad" fill className="object-cover" priority />
      </div>
    )
  }

  return (
    <Image
      src={imagePath || "/placeholder.svg"}
      alt="MJ Ahmad"
      width={width}
      height={height}
      className={`object-cover ${className}`}
      priority
    />
  )
}
