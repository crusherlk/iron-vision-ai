import { useState } from "react";
import SolicitationComponent from "../../components/generate/solicitationComponent";
import ProposalTemplate from "../../components/generate/proposalTemplate";
import GeneratedPreview from "../../components/generate/generatedPreview";
import Chatbox from "../../components/generate/chatbox";

const genStatus = {
  initial: "INITIAL",
  generating: "GENERATING",
  generated: "GENERATED",
  preview: "PREVIEW",
};

const example_proposal = [
  {
    title: "Solicitation Purpose",
    info: (
      <p>
        The purpose of this solicitation is to procure marketing and advertising
        services for our upcoming product launch campaign.
      </p>
    ),
  },
  {
    title: "Solicitation Scope",
    info: (
      <>
        <p className="mb-4">The scope of services includes:</p>
        <p>
          Conducting market research and competitor analysis. Creating a
          compelling brand narrative and messaging framework.
        </p>
      </>
    ),
  },
  {
    title: "Solicitation Scope",
    info: (
      <>
        <p className="mb-4">The scope of services includes:</p>
        <p>
          Conducting market research and competitor analysis.
          <br />
          Creating a compelling brand narrative and messaging framework.
        </p>
      </>
    ),
  },
  {
    title: "Target Audience",
    info: <p>digital marketing, and integrated advertising campaigns.</p>,
  },
];

export default function GenerateProposal() {
  const [status, setStatus] = useState(genStatus.initial);

  return (
    <>
      {/* header */}
      <div className="mb-20 flex flex-col gap-3">
        <h2 className="text-page-title font-bold">Generate Proposal</h2>
        <p>
          Makes detailed and personalized proposals based on what you need, how
          big the project is, what's important, and what you want
        </p>
      </div>
      {/* header */}
      {status === genStatus.initial && (
        <form
          className="mx-20"
          onSubmit={(e) => {
            e.preventDefault();
            setStatus(genStatus.generating);
          }}
        >
          <div className="form-item mb-6 flex flex-col gap-2">
            <label>Solicitation Purpose</label>
            <input
              className="form-textbox"
              type="text"
              placeholder="Design and development of new website..."
            />
          </div>
          <div className="form-item mb-6 flex flex-col gap-2">
            <label>Solicitation Scope</label>
            <textarea
              name="solicitation_scope"
              rows="4"
              className="form-textbox min-h-40"
              placeholder="The project Involves Designing and Development.."
            />
          </div>
          <div className="form-item mb-6 flex flex-col gap-2">
            <label>Solicitation Criteria</label>
            <textarea
              name="solicitation_criteria"
              rows="4"
              className="form-textbox min-h-40"
              placeholder="The project Involves Designing and Development.."
            />
          </div>
          <div className="form-item mb-6 flex flex-col gap-2">
            <label>Solicitation Instructions</label>
            <textarea
              name="solicitation_instructions"
              rows="4"
              className="form-textbox min-h-40"
              placeholder="The project Involves Designing and Development.."
            />
          </div>
          <div className="form-item mb-6 flex flex-col gap-2">
            <label>Target Audience</label>
            <input
              className="form-textbox"
              type="text"
              placeholder="Government Agencies"
            />
          </div>
          <div className="form-item mb-6 flex flex-col gap-2">
            <label>Nature Of Solicitation</label>
            <input
              className="form-textbox"
              type="text"
              placeholder="Technical"
            />
          </div>
          <button className="form-button">Submit</button>
        </form>
      )}
      {status === genStatus.generating && (
        <div className="mx-20">
          <section className="flex flex-col gap-20">
            {/* user */}
            <div className="flex gap-6">
              {/* logo */}
              <div className="size-[50px]">
                <svg
                  width="50"
                  height="47"
                  viewBox="0 0 50 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="50" height="47" rx="6" fill="#80B0FF" />
                  <path
                    d="M14.3295 17.3636H17.0852L19.7386 22.375H19.8523L22.5057 17.3636H25.2614L21.017 24.8864V29H18.5739V24.8864L14.3295 17.3636ZM26.6051 29V17.3636H29.0653V22.4943H29.2188L33.4062 17.3636H36.3551L32.0369 22.5739L36.4062 29H33.4631L30.2756 24.2159L29.0653 25.6932V29H26.6051Z"
                    fill="black"
                  />
                </svg>
              </div>
              {/* chat-side  */}
              <div className="flex-1">
                <p className="mb-5 leading-5">
                  Given the solicitation details, including purpose, scope,
                  criteria, and specific instructions, generate a comprehensive,
                  well-structured proposal that addresses all relevant aspects
                  such as project details, timelines, budget estimates, team
                  qualifications, and deliverables. The proposal should be
                  persuasive and tailored to the target audience, and the
                  language and style should adapt based on the nature of the
                  solicitation. Ensure consistency and quality in the proposal.
                </p>
                <div className="flex flex-col gap-3">
                  {example_proposal.map((item, i) => (
                    <SolicitationComponent
                      key={i}
                      title={item.title}
                      info={item.info}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              {/* logo */}
              <div className="size-[50px]">
                <img className="aspect-square" src="/iv-logo.png" alt="iv" />
              </div>
              {/* chat-side  */}
              <div className="flex-1">
                <ProposalTemplate setStatus={setStatus} />
              </div>
            </div>
          </section>
          <div className="">
            <Chatbox />
          </div>
        </div>
      )}
      {status === genStatus.preview && <GeneratedPreview />}
    </>
  );
}
