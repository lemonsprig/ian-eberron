import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  function FolderCardGrid(_props: QuartzComponentProps) {
    return (
      <div>
        <p>Hello from FolderCardGrid!</p>
      </div>
    )
  }

  return FolderCardGrid
}) satisfies QuartzComponentConstructor

