import { useParams } from 'react-router-dom';
import { Vitessce } from 'vitessce';
import '../App.css';

function DynamicPage() {
    const { id } = useParams();

    const config = {
        "version": "1.0.17",
        "name": "Habib et al., 2017 Nature Methods",
        "description": "Archived frozen adult human post-mortem brain tissue profiled by snRNA-seq (DroNc-seq)",
        "datasets": [
            {
                "uid": "habib-2017",
                "name": "Habib 2017",
                "files": [
                    {
                        "fileType": "anndata.zarr",
                        "url": "https://storage.googleapis.com/vitessce-demo-data/habib-2017/habib17.processed.h5ad.zarr",
                        "coordinationValues": {
                            "obsType": "cell",
                            "featureType": "gene",
                            "featureValueType": "expression",
                            "embeddingType": "UMAP"
                        },
                        "options": {
                            "obsFeatureMatrix": {
                                "path": "X",
                                "initialFeatureFilterPath": "var/top_highly_variable"
                            },
                            "obsEmbedding": {
                                "path": "obsm/X_umap"
                            },
                            "obsSets": [
                                {
                                    "name": "Cell Type",
                                    "path": "obs/CellType"
                                }
                            ]
                        }
                    }
                ]
            }
        ],
        "initStrategy": "auto",
        "coordinationSpace": {
            "dataset": {
                "A": "habib-2017"
            },
            "embeddingType": {
                "A": "UMAP"
            },
            "embeddingZoom": {
                "A": 3
            },
            "embeddingTargetX": {
                "A": 0
            },
            "embeddingTargetY": {
                "A": 0
            },
            "embeddingTargetZ": {
                "A": 0
            },
            "embeddingObsSetPolygonsVisible": {
                "A": false
            },
            "embeddingObsSetLabelsVisible": {
                "A": false
            },
            "embeddingObsSetLabelSize": {
                "A": 14
            },
            "embeddingObsRadius": {
                "A": 1
            },
            "embeddingObsRadiusMode": {
                "A": "auto"
            },
            "embeddingObsOpacity": {
                "A": 1
            },
            "embeddingObsOpacityMode": {
                "A": "auto"
            },
            "obsType": {
                "A": "cell"
            },
            "featureType": {
                "A": "gene"
            },
            "featureValueType": {
                "A": "expression"
            },
            "obsColorEncoding": {
                "A": "cellSetSelection"
            },
            "featureSelection": {
                "A": null
            },
            "featureValueColormap": {
                "A": "viridis"
            },
            "featureValueColormapRange": {
                "A": [
                    0,
                    1
                ]
            },
            "obsSetSelection": {
                "A": [
                    [
                        "Cell Type",
                        "Excitatory"
                    ]
                ]
            },
            "obsSetColor": {
                "A": null
            },
            "additionalObsSets": {
                "A": null
            },
            "heatmapZoomX": {
                "A": 0
            },
            "heatmapZoomY": {
                "A": 0
            },
            "heatmapTargetX": {
                "A": 0
            },
            "heatmapTargetY": {
                "A": 0
            },
            "obsFilter": {
                "A": null
            },
            "featureFilter": {
                "A": null
            },
            "obsHighlight": {
                "A": null
            },
            "featureHighlight": {
                "A": null
            }
        },
        "layout": [
            {
                "component": "obsSets",
                "h": 4,
                "w": 4,
                "x": 0,
                "y": 0,
                "coordinationScopes": {
                    "dataset": "A",
                    "obsType": "A",
                    "obsSetSelection": "A",
                    "obsSetColor": "A",
                    "obsColorEncoding": "A",
                    "additionalObsSets": "A",
                    "obsFilter": "A",
                    "obsHighlight": "A",
                    "featureSelection": "A",
                    "featureValueColormap": "A",
                    "featureValueColormapRange": "A"
                }
            },
            {
                "component": "scatterplot",
                "h": 4,
                "w": 4,
                "x": 4,
                "y": 0,
                "coordinationScopes": {
                    "dataset": "A",
                    "obsType": "A",
                    "featureType": "A",
                    "featureValueType": "A",
                    "embeddingType": "A",
                    "embeddingZoom": "A",
                    "embeddingTargetX": "A",
                    "embeddingTargetY": "A",
                    "embeddingTargetZ": "A",
                    "embeddingObsSetPolygonsVisible": "A",
                    "embeddingObsSetLabelsVisible": "A",
                    "embeddingObsSetLabelSize": "A",
                    "embeddingObsRadius": "A",
                    "embeddingObsRadiusMode": "A",
                    "embeddingObsOpacity": "A",
                    "embeddingObsOpacityMode": "A",
                    "obsColorEncoding": "A",
                    "featureSelection": "A",
                    "featureValueColormap": "A",
                    "featureValueColormapRange": "A",
                    "obsSetSelection": "A",
                    "obsSetColor": "A",
                    "additionalObsSets": "A",
                    "obsFilter": "A",
                    "obsHighlight": "A",
                    "featureHighlight": "A"
                }
            },
            {
                "component": "heatmap",
                "h": 4,
                "w": 8,
                "x": 0,
                "y": 4,
                "coordinationScopes": {
                    "dataset": "A",
                    "obsType": "A",
                    "featureType": "A",
                    "featureValueType": "A",
                    "obsColorEncoding": "A",
                    "featureSelection": "A",
                    "featureValueColormap": "A",
                    "featureValueColormapRange": "A",
                    "obsSetSelection": "A",
                    "obsSetColor": "A",
                    "additionalObsSets": "A",
                    "heatmapZoomX": "A",
                    "heatmapZoomY": "A",
                    "heatmapTargetX": "A",
                    "heatmapTargetY": "A",
                    "obsFilter": "A",
                    "featureFilter": "A",
                    "obsHighlight": "A",
                    "featureHighlight": "A"
                }
            },
            {
                "component": "featureList",
                "h": 4,
                "w": 4,
                "x": 8,
                "y": 0,
                "coordinationScopes": {
                    "dataset": "A",
                    "obsType": "A",
                    "featureType": "A",
                    "featureValueType": "A",
                    "featureSelection": "A",
                    "obsColorEncoding": "A",
                    "featureFilter": "A",
                    "obsHighlight": "A",
                    "featureHighlight": "A"
                }
            }
        ]
    };

    return (
        <div className="container">
            <h1 className="dynamic-title">{id}</h1>
            <div className="vitessce-container">
                <Vitessce
                    height={600}
                    theme="dark"
                    config={config}
                />
            </div>
        </div>
    );
}

export default DynamicPage;
