async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/LucasManera2017/Portifolio-Pessoal/refs/heads/main/data/profile.json";
    const fetching = await fetch(url)
    return await fetching.json()
}
