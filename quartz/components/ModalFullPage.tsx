import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((component?: QuartzComponent) => {
  if (component) {
    const Component = component
    const ModalFullPage: QuartzComponent = (props: QuartzComponentProps) => {
      return <Component specialId="mobileExplorer" className="full-page" {...props} />
    }

    ModalFullPage.displayName = component.displayName
    ModalFullPage.afterDOMLoaded = component?.afterDOMLoaded
    ModalFullPage.beforeDOMLoaded = component?.beforeDOMLoaded
    ModalFullPage.css = component?.css
    return ModalFullPage
  } else {
    return () => <></>
  }
}) satisfies QuartzComponentConstructor