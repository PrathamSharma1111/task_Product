import supplyImage from '../assets/supply.png'
import star from '../assets/star.png'
const SupplierInfo = () => {
    return (
        <div className="bg-white shadow-md rounded p-4 lg:w-[520px] relative">
            <img src={supplyImage} alt="Supplier" className="w-full rounded" />
            <button className="w-full mt-4 py-2 text-white rounded"
                style={{ background: 'linear-gradient(180deg, #74CC7E 0%, #00818A 100%)' }} >Follow</button>
            <h2 className="text-xl font-semibold mt-4">Tab Sport</h2>
            <p className="text-sm text-gray-500">218/B, Near Mala sheri</p>
            <p className="text-sm text-gray-500">Mumbai, Maharashtra - 259632</p>
            <p className="mt-2 flex items-center gap-2">4.8 <img src={star} alt="star" className='w-5 h-5' /> (13 reviews)</p>

            <p className="mt-2 font-semibold text-gray-500">Open Now:</p>
            <p className='text-gray-500'>Mon - Sun (10:30 am - 9:30 pm)</p>


            <button className="w-full py-2 border mt-6 text-black font-semibold border-green-600 rounded"
                style={{ border: 'linear-gradient(180deg, #74CC7E 0%, #00818A 100%)' }}>
                About Supplier
            </button>
        </div>
    );
};

export default SupplierInfo;
