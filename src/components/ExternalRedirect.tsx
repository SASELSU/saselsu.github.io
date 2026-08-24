import { useEffect } from 'react';

interface ExternalRedirectProps {
    to: string;
}

export default function ExternalRedirect({ to }: ExternalRedirectProps) {
    useEffect(() => {
        window.location.href = to;
    }, [to]);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <p>Taking you to the hackathon page...</p>
        </div>
    );
}