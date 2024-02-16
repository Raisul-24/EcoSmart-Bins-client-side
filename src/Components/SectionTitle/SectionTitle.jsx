

const SectionTitle = ({heading}) => {
    return (
        <div className="mb-5 md:mb-10">
            <div className="mx-auto text-center md:w-8/12  font-andika">
        <h3 className="text-2xl md:text-3xl capitalize font-semibold mb-5">{heading}</h3>
        
    </div>
    <hr />
        </div>
    );
};

export default SectionTitle;