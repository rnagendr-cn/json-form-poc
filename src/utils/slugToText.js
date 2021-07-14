const slugToText = (slug) => {
  let words = slug.split("_")
  words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  return words.join(" ")
}

export default slugToText
