import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Menu()),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(Component.ModalFullPage(Component.Explorer({ folderDefaultState: "open" }))),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
        sortFn: (a, b) => {
          if ((!a.file && !b.file) || (a.file && b.file)) {
            return a.displayName.localeCompare(b.displayName)
          }
          if (a.file && !b.file) {
            return -1
          } else {
            return 1
          }
        },
      })),
  ],
  right: [
    Component.Graph({
        localGraph: {
            scale: 2,
            fontSize: 0.6
        }
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
