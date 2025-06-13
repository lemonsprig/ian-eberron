import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const FolderCardGrid: QuartzComponentConstructor = () => {
  const Component = (_props: QuartzComponentProps) => {
    return (
      <div>
        <p>Hello from FolderCardGrid!</p>
      </div>
    )
  }

  return Component
}

export default FolderCardGrid

