import React, { useEffect, useState } from 'react'
import './css/dragDrop.css'

export const DragDrop = () => {
const [post,setPost] = useState({
        title:'',
        desc:'',
        photos:[]
    })
const [highlight,setHighlight]=useState(false);
const{title,desc,photos} = post;
const handleChange = e =>{
    setPost({
    ...post,
    [e.target.name]: e.target.value
    })
}
const handleFileChange = e =>{
    let files = e.target.files;
    handFiles(files);
    }
    
    const handFiles = files =>{
            let photosArr=[];
    for(let file of files){
        let reader= new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load',()=>{
           let fileObj={
              name:file.name,
              type:file.type,
              size:file.size,
              src:reader.result
        } 
        photosArr.push(fileObj);
        setPost({
            ...post,
            photos: [...photos, ...photosArr]
        })
        })
        
    }} 
        
        
        const handleDelete = e =>{
     let target = e.target.parentElement;
     let targetindex = target.dataset.imgindex;
     setPost({
         ...post,
         photos: [...photos.slice(0,targetindex), ...photos.slice(targetindex + 1)]
    })
    }
    const handleHighLight =e =>{
        e.preventDefault();
        e.stopPropagation();
        setHighlight(true)
    }
    const handleUnhiglight = e=>{
         e.preventDefault();
        e.stopPropagation();
        setHighlight(false)
    }
    const handleDrop = e=>{
         e.preventDefault();
        e.stopPropagation();
        let dt = e.dataTransfer;
        let files = dt.files;
        setHighlight(false)
         handFiles(files)
    }
    return (
        <div className="file-upload">
        <h2>Image Drag & Drop & Preview</h2>
        <form className="" encType='multipart/form-data'>
            <div className="custom-form-group" >
                <input type="text" name="title" placeholder="Title" value={title} onChange={handleChange}/>
            </div>
            <div className="custom-form-group">
                <input type="text" name="desc" placeholder="Description" value={desc} onChange={handleChange} />
            </div>
            <div className="custom-form-group">
                <div 
                className={highlight ? "custom-file-drop-area highlight" : "custom-file-drop-area" }
                onDragEnter={handleHighLight}
                onDragOver={handleHighLight} 
                onDragLeave={handleUnhiglight}
                onDrop={handleDrop}>
                    <input type="file"name="photos" placeholder="Enter photos" multiple id="filephotos" onChange={handleFileChange}/>
                    <label htmlFor="filephotos">Drag & Drop</label>
                </div>
                <div className="custom-file-preview">
                {photos.length > 0 && photos.map((item,index) =>(
                    <div className="prev-img" key={index} data-imgindex={index} >
                        <span onClick={handleDelete}>&times;</span>
                        <img src={item.src} alt={item.name}/>
                    </div>
                ))}
                </div>
            </div>
            <button type="submit" className="btn-submit">Submit</button>
        </form>
    </div>
        
    )
}
