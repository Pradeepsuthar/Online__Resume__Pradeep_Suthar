export interface ProjectImages {
    imgUrl: string;
}

export interface Projects extends ProjectImages{
    projectTitle?: string;
    projectDesc?: string;
    projectSourchCode?: string;
    projectLiveUrl?: string;
    projectImgs?: ProjectImages;
}
