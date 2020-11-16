export const limitResults = (data, offset) => {
    const index = offset * 10
    return data.slice(index, (index + 10))
}

export const pagination = (num) => {
    return Math.ceil(num / 10)
}