"use client"
import { definePreview } from 'next-sanity/preview'

import { dataset, projectId } from '../env'

function onPublicAccessOnly(){
    throw new Error(`Unable to preview this shit`)
}

if (!projectId || dataset){
    throw new Error(
        `Missing this piece of shit man`
    )
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})