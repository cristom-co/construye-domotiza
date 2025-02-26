const Service = ({ bg, title }: { bg: string, title: string }) => {
    return (
        <div
            className="h-[calc(100vh-100px)] bg-cover bg-center"
            style={{ backgroundImage: "url('/bg/" + bg + "')" }}
        >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50 text-center">
                <h2 className="text-white text-4xl font-bold">
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default Service;