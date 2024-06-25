import Feature from "./features.feature"

export default function PeopleFeatures() {
    return (
        <div className="flex flex-col md:flex-row gap-[20px] w-full">
            <Feature
                title="Create a Profile"
                image="/ProfileEdit.png"
                color="text-green-300"
                description="Add extracurriculars, awards, sports, community service hours, arts & humanities, test scores, projects, and internships to your profile for recruiters and peers to see. "
            />
            <Feature
                title="Find Peers"
                image="/UserMockup.png"
                color="text-green-300"
                description="Browse from connections, alumni networks, and more to find people who inspire you to find new opportunities and grow."
            />
            <Feature
                title="Improve Your Profile"
                color="text-green-300"
                image="/ProfileImprove.png"
                description="Use our custom in-house tutorials to learn more about the college admissions process and improve your own profile to be more attractive to recruiters."
            />
        </div>
    )
}