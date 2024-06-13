export const header= () => {
    const padreHeader = document.createElement("div")
    const hijoHeader= document.createElement("div")

    hijoHeader.innerHTML = `
 
< header >
<h1> GILMORE GIRLS SERIE </h1>
</header >
`
padreHeader.appendChild(hijoHeader)

return padreHeader
};