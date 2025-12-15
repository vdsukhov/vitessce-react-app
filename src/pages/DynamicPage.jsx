import { useParams } from 'react-router-dom';
import '../App.css';

function DynamicPage() {
    const { id } = useParams();

    return (
        <div className="container">
            <h1 className="dynamic-title">{id}</h1>
        </div>
    );
}

export default DynamicPage;
