import { QuartzComponentConstructor, QuartzComponentProps } from "../types"
import FolderCardGrid from "../FolderCardGrid"

export default (() => {
  function HomePage(_props: QuartzComponentProps) {
    return (
      <main class="page">
        <article>
          <FolderCardGrid />
        </article>
      </main>
    )
  }

  return HomePage
}) satisfies QuartzComponentConstructor
