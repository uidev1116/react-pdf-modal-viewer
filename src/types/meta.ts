export interface Meta {
  fileName: string
  fileSize: {
    mb?: number
    kb?: number
    b: number
  }
  title?: string
  author?: string
  subject?: string
  keywords?: string
  creator?: string
  producer?: string
  version?: string
  creationDate: Date | null
  modificationDate: Date | null
}
