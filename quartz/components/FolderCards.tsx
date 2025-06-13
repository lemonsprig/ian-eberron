import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { resolveRelative } from "../util/path"

interface FolderCardData {
  name: string
  path: string
  description?: string
  image?: string
}

export default (() => {
  const FolderCards: QuartzComponent = ({ 
    fileData, 
    allFiles, 
    cfg,
    displayClass 
  }: QuartzComponentProps) => {
    // Only show on index page
    if (fileData.slug !== "index") {
      return null
    }

    // Get all unique folder paths from allFiles
    const folders = new Set<string>()
    
    allFiles?.forEach(file => {
      const pathParts = file.slug?.split('/') || []
      if (pathParts.length > 1) {
        // Get the first folder in the path
        folders.add(pathParts[0])
      }
    })

    // Define custom mappings for your folders
    const folderImageMap: Record<string, string> = {
      'eberronlore': '/static/images/EberronLore.png',
      'houserules': '/static/images/HouseRules.png',
      'races': '/static/images/Races.png',
      'races & identity': '/static/images/races.png',
    }

    // Convert to array and create card data
    const folderCards: FolderCardData[] = Array.from(folders)
      .filter(folder => folder && folder !== 'index')
      .map(folder => {
        const folderLower = folder.toLowerCase()
        return {
          name: folder.charAt(0).toUpperCase() + folder.slice(1), // Capitalize first letter
          path: `/${folder}/`,
          description: `Explore ${folder} content`, // Default description
          image: folderImageMap[folderLower] || '/static/images/default-folder.svg'
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))

    if (folderCards.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "folder-cards-container")}>
        <h2>Explore Topics</h2>
        <div class="folder-cards-grid">
          {folderCards.map(card => (
            <div class="folder-card">
              <a href={resolveRelative(fileData.slug!, card.path)} class="folder-card-link">
                <div class="folder-card-image">
                  <img 
                    src={resolveRelative(fileData.slug!, card.image!)} 
                    alt={`${card.name} icon`}
                    onError="this.src='/static/images/default-folder.png'"
                  />
                </div>
                <div class="folder-card-content">
                  <h3 class="folder-card-title">{card.name}</h3>
                  <p class="folder-card-description">{card.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }

  FolderCards.displayName = "FolderCards"
  return FolderCards
}) satisfies QuartzComponentConstructor