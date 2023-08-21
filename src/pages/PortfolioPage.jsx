import GoToTop from "../components/GoToTop";
import PhotoAlbum from "react-photo-album";

export default function PortfolioPage({portfolioPhotos}) {
    return (
        <div className = "photoCollage my-4">
            <GoToTop/>
            <PhotoAlbum photos = {portfolioPhotos} layout = "rows"/>
        </div>
    )
}