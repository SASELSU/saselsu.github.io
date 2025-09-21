import React, { useState, useEffect } from "react";

export default function DirtCard ({
    title,
    content,
    backTitle,
    backContent,
    openDate,
    list = false,
    backList = false,
    width = 400,
    height = 300
}) {
    const [flipped, setFlipped] = useState(false);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [days, setDays] = useState(null);

    useEffect(() => {
        if (!openDate) return;
        const update = () => {
            const now = new Date();
            const target = typeof openDate === "string" ? new Date(openDate) : openDate;
            const diff = target - now;
            const d = Math.max(Math.ceil(diff / (1000 * 60 * 60 * 24)), 0);
            setDays(d);
        };
        update();
        const iv = setInterval(update, 1000 * 60 * 60);
        return () => clearInterval(iv);
    }, [openDate]);

    const frontItems = list && typeof content === "string"
        ? content.split(",").map(s => s.trim()).filter(Boolean)
        : null;
    const backItems = backList && typeof backContent === "string"
        ? backContent.split(",").map(s => s.trim()).filter(Boolean)
        : null;

    const handleMouseMove = e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const t = 10;
        setTilt({ x: -(py - 0.5) * t * 2, y: (px - 0.5) * t * 2 });
    };
    const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

    const dirtColor = "#8B5A2B";
    const dirtBorder = "#5C4033";
    const grassColor = "#5DA130";

    const cardStyle = { width: "100%", maxWidth: width, height, perspective: "1000px", cursor: "pointer" };
    const flipperStyle = {
        position: "relative", width: "100%", height: "100%", transformStyle: "preserve-3d",
        transition: "transform 0.3s ease",
        transform: `rotateY(${flipped ? 180 : 0}deg) rotateX(${tilt.x}deg) rotateZ(${tilt.y}deg)`
    };
    const faceCommon = {
        position: "absolute", width: "100%", height: "100%", display: "flex",
        flexDirection: "column", backfaceVisibility: "hidden", borderRadius: 8,
        boxSizing: "border-box", boxShadow: "inset 0 0 5px rgba(0,0,0,0.5)",
        overflow: "hidden", fontFamily: '"Akaya Kanadaka", cursive', color: "#fff",
        textShadow: "1px 1px 2px rgba(0,0,0,0.7)", fontSize: "18px"
    };
    const frontStyle = { ...faceCommon, background: dirtColor, border: `4px solid ${dirtBorder}`, transform: "rotateY(0deg)" };
    const backStyle = { ...faceCommon, background: dirtColor, border: `4px solid ${dirtBorder}`, transform: "rotateY(180deg)" };
    const grassStyle = {
        flex: "0 0 20%", background: grassColor, boxShadow: "inset 0 -2px 4px rgba(0,0,0,0.3)",
        display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "22px"
    };
    const contentArea = {
        flex: "1 1 auto", display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", padding: "16px", textAlign: "center"
    };
    const badgeStyle = {
        background: dirtColor, border: `2px solid ${dirtBorder}`, color: "#fff",
        padding: "6px 12px", borderRadius: "8px", fontSize: "20px", fontWeight: "bold",
        boxShadow: "inset 0 0 3px rgba(0,0,0,0.5)"
    };

    return (
        <div
            style={cardStyle}
            onClick={() => setFlipped(f => !f)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div style={flipperStyle}>
                {/* Front Face */}
                <div style={frontStyle}>
                    <div style={grassStyle}>{title}</div>
                    <div style={contentArea}>
                        {frontItems
                            ? (
                                <ul style={{ textAlign: "left", paddingLeft: 20, margin: "0 0 8px" }}>
                                    {frontItems.map((it, i) => <li key={i} style={{ marginBottom: 4 }}>{it}</li>)}
                                </ul>
                            )
                            : (
                                <p style={{ margin: "0 0 8px" }}>{content}</p>
                            )}
                        {days !== null && <div style={badgeStyle}>{days} day{days !== 1 ? "s" : ""}</div>}
                    </div>
                </div>
                {/* Back Face */}
                <div style={backStyle}>
                    <div style={grassStyle}>{backTitle}</div>
                    <div style={contentArea}>
                        {backItems
                            ? (
                                <ul style={{ textAlign: "left", paddingLeft: 20, margin: 0 }}>
                                    {backItems.map((it, i) => <li key={i} style={{ marginBottom: 4 }}>{it}</li>)}
                                </ul>
                            )
                            : (
                                <p style={{ margin: 0 }}>{backContent}</p>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}
