import { useParams } from 'react-router-dom';
import { Vitessce, VitessceConfig, ViewType as vt, CoordinationType as ct, FileType as ft, hconcat, vconcat } from 'vitessce';
import '../App.css';

function DynamicPage() {
    const { id } = useParams();

    try {
        const vc = new VitessceConfig({
            schemaVersion: "1.0.17",
            name: "Habib et al., 2017 Nature Methods",
            description: "Archived frozen adult human post-mortem brain tissue profiled by snRNA-seq (DroNc-seq)",
        });

        const dataset = vc.addDataset("Habib 2017")
            .addFile({
                url: "https://storage.googleapis.com/vitessce-demo-data/habib-2017/habib17.processed.h5ad.zarr",
                fileType: ft.ANNDATA_ZARR,
                coordinationValues: {
                    obsType: "cell",
                    featureType: "gene",
                    featureValueType: "expression",
                    embeddingType: "UMAP"
                },
                options: {
                    obsFeatureMatrix: {
                        path: "X",
                        initialFeatureFilterPath: "var/top_highly_variable"
                    },
                    obsEmbedding: {
                        path: "obsm/X_umap",
                        dims: [0, 1],
                        embeddingType: "UMAP"
                    },
                    obsSets: [
                        {
                            name: "Cell Type",
                            path: "obs/CellType"
                        }
                    ]
                }
            });

        const obsSets = vc.addView(dataset, vt.OBS_SETS);
        const scatterplot = vc.addView(dataset, vt.SCATTERPLOT, { mapping: "UMAP" });
        const heatmap = vc.addView(dataset, vt.HEATMAP);
        const featureList = vc.addView(dataset, vt.FEATURE_LIST);

        vc.layout(
            hconcat(
                vconcat(obsSets, heatmap),
                vconcat(scatterplot, featureList)
            )
        );

        // Set initial coordination values
        const [embeddingZoomScope] = vc.addCoordination(ct.EMBEDDING_ZOOM);
        embeddingZoomScope.setValue(3);
        scatterplot.useCoordination(embeddingZoomScope);

        const [obsSetSelectionScope] = vc.addCoordination(ct.OBS_SET_SELECTION);
        obsSetSelectionScope.setValue([["Cell Type", "Excitatory"]]);

        obsSets.useCoordination(obsSetSelectionScope);
        scatterplot.useCoordination(obsSetSelectionScope);
        heatmap.useCoordination(obsSetSelectionScope);
        featureList.useCoordination(obsSetSelectionScope);

        const config = vc.toJSON();
        console.log('Config generated successfully', config);

        return (
            <div className="container">
                <h1 className="dynamic-title">{id}</h1>
                <div className="vitessce-container">
                    <Vitessce
                        height={800}
                        theme="dark"
                        config={config}
                    />
                </div>
            </div>
        );
    } catch (e) {
        console.error('Error generating config:', e);
        return <div className="error">Error generating config: {e.message}</div>;
    }
}

export default DynamicPage;
