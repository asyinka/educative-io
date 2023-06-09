const HoverContent = ({ childrenH2, childrenP, iconName }) => {
  return (
    <div className="px-2">
      <div className="flex hover:bg-gray-100 group cursor-pointer py-2">
        <div className="mx-2 group-hover:text-blue-400 bg-gray-100">
          {iconName}
        </div>
        <div>
          <h2 className="font-bold mb-2">{childrenH2}</h2>
          <p className="text-gray-600 text-xs mb-2 font-medium">{childrenP}</p>
        </div>
      </div>
    </div>
  );
};

export default HoverContent;
