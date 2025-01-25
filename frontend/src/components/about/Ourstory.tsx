import image from "@/assets/images/pastorBawa.png";

const Ourstory = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-24">
      {/* Page Header */}
      <h1 className="text-center text-5xl font-bold text-gray-800 mb-12">
        Our Story
      </h1>

      {/* Our Story Section */}
      <section className="mb-16">
        <div className="bg-white p-6 shadow-md rounded-lg text-lg leading-relaxed text-gray-700">
          <p>
            All praise and glory be to God Almighty, to whom we belong, for
            granting us the privilege of working alongside Him in reaching out
            to souls. May the fruits of our labor be His alone, forever. Amen.
          </p>
          <p>
            We are a group of believers from various denominations, united by a
            passion for missions. Our sole aim is to reach out to souls wherever
            they may be, enabling their salvation, rededication, commitment, and
            discipleship, transforming them into effective tools in God's hands.
          </p>
          <p>
            To achieve this, we prayerfully seek and visit a mission field each
            Christmas period. The local mission agency or umbrella organization
            serves as our host. Since 2012, we have been privileged to visit
            several mission fields across various states in Nigeria. However,
            our initial mission efforts, born out of a strong passion for
            soul-winning, began at Kagoro Mountains in 2007.
          </p>
          <p>
            Ultimately, we rely on God's provision and leverage our individual
            commitments, as well as the support of like-minded individuals,
            groups, and organizations to fund our missions. We present the
            Gospel message in accordance with the Bible and entrust new converts
            to the care of local missionaries and pastors for follow-up and
            discipleship.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Mission and Vision
        </h2>
        <ul className="bg-white p-6 shadow-md rounded-lg text-lg text-gray-700 space-y-4">
          <li>
            <strong>Motto:</strong> Every soul counts.
          </li>
          <li>
            <strong>Mandate:</strong> To reawaken the body of Christ to the
            Great Commission.
          </li>
          <li>
            <strong>Goal:</strong> To preach the Gospel simply, presenting
            Christ crucified for salvation, strengthening believers, and
            enabling disciple-making.
          </li>
          <li>
            <strong>Mission:</strong> To reach all people with the Gospel and
            empower their holistic development.
          </li>
          <li>
            <strong>Approach:</strong> Preaching the Gospel alongside free
            humanitarian services.
          </li>
        </ul>
      </section>

      {/* Leadership Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Leadership</h2>
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Leader Image */}
          <div className="flex-shrink-0">
            <img
              src={image}
              alt="Pastor Bawa G. Emmanuel"
              className="w-[300px] lg:w-[400px] h-auto object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-center font-bold text-lg">
              Coordinator/President: Bawa G. Emmanuel
            </p>
          </div>

          {/* Leader Description */}
          <div className="bg-white p-6 shadow-md rounded-lg text-lg leading-relaxed text-gray-700">
            <p>
              Bawa G. Emmanuel has an apostolic and evangelistic mandate,
              serving as a spiritual midwife to bring about the revival that is
              upon the church by upholding the truth of God's Word and
              reawakening the body of Christ to the Great Commission – missions.
            </p>
            <p>
              As President of Reachout To All, a non-denominational ministry,
              his aim is to reach souls across the nations with the Gospel,
              accompanied by a humanitarian touch of love.
            </p>
            <p>
              Academically trained as a microbiologist and environmental
              scientist, Bawa G. Emmanuel holds a Master's degree in
              Environmental Management. He is also a radio evangelist and
              preacher of God's Word, serving the body of Christ across the
              board.
            </p>
            <p>
              Bawa G. Emmanuel is married to Funmilola, his lovely wife, and
              they have two children, Agmada and Shekwolo. The family is based
              in Kaduna, Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Team Table Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Team
        </h2>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <table className="table-auto w-full text-left text-gray-700">
            <tbody>
              <tr>
                <td className="font-semibold pr-4">
                  Secretary-Administration:
                </td>
                <td>Japhet Chucks Jonathan</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Secretary-Operations:</td>
                <td>Obed Marcus Minna</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Treasurer:</td>
                <td>Alheri Ali</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Abuja Field Missionary:</td>
                <td>Nathan S. Galadima</td>
              </tr>
              <tr>
                <td className="font-semibold pr-4">Ondo Field Missionary:</td>
                <td>Victor O. Enenche</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonies Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Testimonies</h2>
        <div className="bg-white p-6 shadow-md rounded-lg text-lg text-gray-700">
          <p>
            Since 2012, we have conducted 13 outreaches in 16 mission fields
            across over 15 states in Nigeria. Our team has grown to over 200
            members, and we have reached over 3,500 people in 21 communities.
            These outreaches have resulted in over 1,200 salvation commitments
            and provided free basic medical services and welfare materials to
            over 3,500 beneficiaries.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Ourstory;
