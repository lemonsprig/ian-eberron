import { QuartzComponentConstructor, QuartzComponentProps } from "../types"
import FolderCardGrid from "../FolderCardGrid"

const HomePage: QuartzComponentConstructor = () => {
  const Component = (_props: QuartzComponentProps) => {
    return (
      <main class="page">
        <article>
          <FolderCardGrid />
        </article>
      </main>
    )
  }

  return Component
}

export default HomePage

