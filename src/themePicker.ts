export const applyTheme = (theme: any) =>{
    if (!theme || !theme.colors) return
    console.log(theme);
    const root = document.documentElement
    Object.entries(theme.colors).forEach(([k, v]) => {
      root.style.setProperty(`--${k}`, String(v))
    })
  }