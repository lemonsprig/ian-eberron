import { QuartzComponentConstructor, QuartzComponentProps } from "../types"
import FolderCardGrid from "../FolderCardGrid"

export default (() => {
  function HomePage(props: QuartzComponentProps) {
    return (
      <main class="page">
        <article>
          <FolderCardGrid {...props} />
        </article>
      </main>
    )
  }

  return HomePage
}) satisfies QuartzComponentConstructor
