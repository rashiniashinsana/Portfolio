import AnimatedCursor from "react-animated-cursor";

function AnimCursor() {
    return (
        <AnimatedCursor
            innerSize={10}
            outerSize={40}
            color="0, 122, 255" // Blue
            outerAlpha={0.3}
            innerScale={1.3}
            outerScale={3.5}
            trailingSpeed={6}
            showSystemCursor={false}
            outerStyle={{
                mixBlendMode: "exclusion",
                boxShadow: "0 0 10px rgba(0, 122, 255, 0.7)", // Blue glow effect
            }}
            innerStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "50%",
            }}
            clickables={[
                "a",
                "button",
                "input",
                "textarea",
                "select",
                "label[for]",
                ".clickable",
            ]}
        />
    );
}

export default AnimCursor;
