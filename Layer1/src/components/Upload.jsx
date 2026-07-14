import { useState, useEffect } from "react";

function Upload(){
    const [albumTitle, setAlbumTitle] = useState('');
    const [cameraBody, setCameraBody] = useState('');
    const [coverImage, setCoverImage] = useState(null);
    const [images, setImages] = useState([]);

    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [year, setYear] = useState('');
    const [lens, setLens] = useState('');
    const [focalLength, setFocalLength] = useState('');
    const [aperture, setAperture] = useState('');
    const [shutterSpeed, setShutterSpeed] = useState('');
    const [iso, setIso] = useState('');

    const [coverPreview, setCoverPreview] = useState(null);
    const [imagePreviews, setImagePreviews] = useState([]);

    useEffect(() => {
        if(!coverImage){
            setCoverPreview(null);
            return;
        }
        const url = URL.createObjectURL(coverImage);
        setCoverPreview(url);
        return () => URL.revokeObjectURL(url);
    }, [coverImage]);

    useEffect(() => {
        const urls = images.map((image) => URL.createObjectURL(image));
        setImagePreviews(urls);
        return () => urls.forEach((url) => URL.revokeObjectURL(url));
    }, [images]);

    async function handleSubmit(e){
        e.preventDefault();

        const data = new FormData();
        data.append('albumTitle', albumTitle);
        data.append('cameraBody', cameraBody);
        data.append('description', description);
        data.append('location', location);
        data.append('year', year);
        data.append('lens', lens);
        data.append('focalLength', focalLength);
        data.append('aperture', aperture);
        data.append('shutterSpeed', shutterSpeed);
        data.append('iso', iso);

        if(coverImage){
            data.append('coverImage',coverImage);
        }

        images.forEach((image) => {
            data.append('images',image);
        });

        const response = await fetch('http://localhost:3000/upload-album',{
            method:'post',
            body : data
        });

        const result = await response.json();
        console.log(result);
    }

    const inputStyle = {
        padding: "10px 12px",
        borderRadius: "6px",
        border: "1px solid var(--dust-grey)",
        backgroundColor: "var(--linen)",
        color: "var(--text-dark)",
        fontSize: "0.95rem",
        outline: "none",
        width: "100%",
    };

    const labelStyle = {
        color: "var(--text-mid)",
        fontSize: "0.8rem",
        marginBottom: "4px",
        display: "block",
    };

    const previewBoxStyle = {
        width: "72px",
        height: "72px",
        objectFit: "cover",
        borderRadius: "6px",
        border: "1px solid var(--dust-grey)",
    };

    return(
        <div style={{ backgroundColor: "var(--linen)", minHeight: "100vh" }}
             className="flex items-center justify-center px-4 py-10">
            <div style={{ backgroundColor: "var(--parchment)", border: "1px solid var(--dust-grey)" }}
                 className="w-full max-w-lg p-8 flex flex-col gap-5 shadow-lg">
                <h2 style={{ color: "var(--text-dark)", fontFamily: "cursive", margin: 0 }}
                    className="text-2xl text-center">
                    Upload Album
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label style={labelStyle}>Album Title *</label>
                        <input
                            style={inputStyle}
                            type="text"
                            value={albumTitle}
                            onChange={(e) => setAlbumTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Camera Body *</label>
                        <input
                            style={inputStyle}
                            type="text"
                            value={cameraBody}
                            onChange={(e) => setCameraBody(e.target.value)}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label style={labelStyle}>Location</label>
                            <input style={inputStyle} type="text" value={location}
                                onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <div>
                            <label style={labelStyle}>Year</label>
                            <input style={inputStyle} type="text" value={year}
                                onChange={(e) => setYear(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label style={labelStyle}>Description</label>
                        <textarea
                            style={{ ...inputStyle, resize: "vertical", minHeight: "70px" }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label style={labelStyle}>Lens</label>
                            <input style={inputStyle} type="text" value={lens}
                                onChange={(e) => setLens(e.target.value)} />
                        </div>
                        <div>
                            <label style={labelStyle}>Focal Length</label>
                            <input style={inputStyle} type="text" value={focalLength}
                                onChange={(e) => setFocalLength(e.target.value)} />
                        </div>
                        <div>
                            <label style={labelStyle}>Aperture</label>
                            <input style={inputStyle} type="text" value={aperture}
                                onChange={(e) => setAperture(e.target.value)} />
                        </div>
                        <div>
                            <label style={labelStyle}>Shutter Speed</label>
                            <input style={inputStyle} type="text" value={shutterSpeed}
                                onChange={(e) => setShutterSpeed(e.target.value)} />
                        </div>
                        <div>
                            <label style={labelStyle}>ISO</label>
                            <input style={inputStyle} type="text" value={iso}
                                onChange={(e) => setIso(e.target.value)} />
                        </div>
                    </div>

                    <div>
                        <label style={labelStyle}>Cover Image *</label>
                        <input
                            style={inputStyle}
                            type="file"
                            accept="image/*"
                            required
                            onChange={(e) => setCoverImage(e.target.files[0] || null)}
                        />
                        {coverPreview && (
                            <div className="flex gap-2 mt-2">
                                <img src={coverPreview} alt="Cover preview" style={previewBoxStyle} />
                            </div>
                        )}
                    </div>

                    <div>
                        <label style={labelStyle}>More Images *</label>
                        <input
                            style={inputStyle}
                            type="file"
                            multiple
                            accept="image/*"
                            required
                            onChange={(e) => setImages(Array.from(e.target.files))}
                        />
                        {imagePreviews.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {imagePreviews.map((url, i) => (
                                    <img key={i} src={url} alt={`Preview ${i + 1}`} style={previewBoxStyle} />
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        type="submit"
                        style={{
                            backgroundColor: "var(--text-dark)",
                            color: "var(--linen)",
                            border: "none",
                            borderRadius: "6px",
                            padding: "10px",
                            fontSize: "0.95rem",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                        className="cursor-pointer transition-opacity hover:opacity-90"
                    >
                        Upload
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Upload;
