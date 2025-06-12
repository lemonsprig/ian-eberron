import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export const FolderCardGrid: QuartzComponentConstructor = (_opts) => {
  return ({ allContent }: QuartzComponentProps) => {
    const topFolders = Array.from(
      new Set(
        allContent
          .map((item: QuartzComponentProps["allContent"][number]) => item.slug.split("/")[0])
          .filter((slug: string) => slug !== "index" && slug !== "")
      )
    )

    return (
      <div class="folder-grid">
        <p>hello</p>
        {/* {topFolders.map((folder: string) => (
          <a href={`/${folder}/`} class="folder-card">
            <h2>{folder.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}</h2>
          </a>
        ))} */}
      </div>
    )
  }
}

export default FolderCardGrid
