import Header from "./Header";
import Card from "./Card";
import TimerSelector from "./TimerSelector";

export default function SetupView({ IMAGES, selectedImage, setSelectedImage, selectedDuration, onDurationChange, onStart }) {

    return (

        < div className="setup-mode">
            <Header ></Header>
            <p className="atmosphere-text">Select an atmosphere:</p>
            <div className="row row-cols-4 row-cols-md-4 g-4">
                <div class="col">
                    <Card title="Walk in the snow"
                        text="A walk in the snow with the sound of footsteps and the crunching of snow underfoot."
                        imageUrl={IMAGES.snowImg}
                        selected={selectedImage}
                        onSelect={setSelectedImage}>
                    </Card>
                </div>
                <div class="col">
                    <Card title="Rain"
                        text="Gentle rainfall sounds to create a calming atmosphere."
                        imageUrl={IMAGES.rainImg}
                        selected={selectedImage}
                        onSelect={setSelectedImage}>
                    </Card>
                </div>
                <div class="col">
                    <Card title="Forest"
                        text="Nature sounds of a peaceful forest to enhance relaxation."
                        imageUrl={IMAGES.forestImg}
                        selected={selectedImage}
                        onSelect={setSelectedImage}>
                    </Card>
                </div>
                <div class="col">
                    <Card title="Ocean"
                        text="Waves crashing on a beach to promote tranquility."
                        imageUrl={IMAGES.oceanImg}
                        selected={selectedImage}
                        onSelect={setSelectedImage}>
                    </Card>
                </div>
                <div class="col">
                    <Card title="By the canal"
                        text="Sounds of gondolas and water in Venice to create a serene ambiance."
                        imageUrl={IMAGES.veniceImg}
                        selected={selectedImage}
                        onSelect={setSelectedImage}>
                    </Card>
                </div>
                <div class="col">
                    <Card title="Siesta"
                        text="Busy streets, chatter and music to play in the background of your siesta."
                        imageUrl={IMAGES.siestaImg}
                        selected={selectedImage}
                        onSelect={setSelectedImage}>
                    </Card>
                </div>
                <div class="col">
                    <Card title="Japanese porch"
                        text="Relaxing sounds of a Japanese porch to create a peaceful atmosphere."
                        imageUrl={IMAGES.japanImg}
                        selected={selectedImage}
                        onSelect={setSelectedImage}>
                    </Card>
                </div>
                <div class="col">
                    <Card title="Paris café"
                        text="Relaxing sounds of a Parisian café to create a cozy atmosphere."
                        imageUrl={IMAGES.parisImg}
                        selected={selectedImage}
                        onSelect={setSelectedImage}>
                    </Card>
                </div>
            </div>
            <p className="timer-text">Select a duration for the session: </p>
            <TimerSelector
                selected={selectedDuration}
                onSelect={onDurationChange}>
            </TimerSelector>
            <button type="button" className="start-btn btn btn-secondary d-block mx-auto mt-5" onClick={onStart} >Start session</button>
        </div>
    )
}   