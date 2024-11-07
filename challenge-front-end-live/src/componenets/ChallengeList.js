import Challenge from "./Challenge";

function ChallengeList({ challenges }) {
    return (
        <div>
            { challenges.map(challenge => (
                <div key={challenge.id}>
                    <Challenge key={challenge.id} challenge={challenge}/>
                </div>
            ))}
        </div>
    );

}

export default ChallengeList;