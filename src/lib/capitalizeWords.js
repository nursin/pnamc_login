export const capitalizeFirstAll = (string) => {
    return string?.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))
} 