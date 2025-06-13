import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const FolderCardGrid: QuartzComponentConstructor = () => {
  function FolderCardGrid(_props: QuartzComponentProps) {
    return (
      <div>
        <p>Hello from FolderCardGrid!</p>
      </div>
    )
  }

  return FolderCardGrid
}

export default FolderCardGrid
