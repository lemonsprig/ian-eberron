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
      'eberron-lore': 'static/images/EberronLore.png',
      'house-rules': 'static/images/HouseRules.png',
      'races--and--identity': 'static/images/Races.png',
      'character-creation': 'static/images/CharacterCreation.png',
    }

    // Convert to array and create card data
    const folderCards: FolderCardData[] = Array.from(folders)
      .filter(folder => folder && folder !== 'index')
      .map(folder => {
        const folderLower = folder.toLowerCase()
        // Convert dashes back to spaces and title case
        const displayName = folder
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ')
        
        return {
          name: displayName,
          path: `/${folder}/`,
          description: `Explore ${displayName} content`,
          image: folderImageMap[folder.toLowerCase()] || 'static/images/default-folder.png'
        }
      })
      .sort((a, b) => a.name.localeCompare(b.name))

    if (folderCards.length === 0) {
      return null
    }

    const handleImageError = (e: Event) => {
      const target = e.target as HTMLImageElement
      target.src = resolveRelative(fileData.slug!, 'static/images/default-folder.png')
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
                    onError={handleImageError}
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