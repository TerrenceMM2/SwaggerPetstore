export const limitResults = async (data, offset) => {
    const index = offset * 10
    return await data.slice(index, (index + 10))
}