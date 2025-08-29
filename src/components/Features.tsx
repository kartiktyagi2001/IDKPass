import { FeatureGrid } from "./FeaturesGrid";
import TiltedText from "./TiltedTitle";


export function Features(){
    return(
        <div className="p-4">            
            <div className="flex items-center justify-center mb-10">
                <p className="text-2xl font-bold text-center">
                    Features That Make Password Management <TiltedText>Magical !</TiltedText>
                </p>
            </div>

            <div>
                <FeatureGrid></FeatureGrid>
            </div>
        </div>
    )
}