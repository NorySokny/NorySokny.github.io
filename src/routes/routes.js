

const basicRoutes = [
    {
      path: "",
      element: <Home />,
      title: "home"
    },
    {
      path: "about",
      element: <About />,
      title: "about"
    }
  ]

const advancedRoutes = [
    {
      path: "complex",
      element: <Complex />,
      title: "complex"
    },
    {
      path: "assignment",
      element: <Assignment />,
      title: "assignment"
    }
  ]

  export const allRoutes = [...basicRoutes,...advancedRoutes]
