
module.exports = (mongoose) => {
    const Book = mongoose.model(
        "books",
        mongoose.Schema(
            {
                title: String,
                description: String,
                available: Boolean
            },
            {
                timestamps: true
            }
        )
    );

    return Book;
}