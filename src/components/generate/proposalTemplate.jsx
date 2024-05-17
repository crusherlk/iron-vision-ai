/* eslint-disable react/prop-types */
import { ClipboardCopyIcon, PreviewIcon } from "../../assets/sidebarIcons";

export default function ProposalTemplate({ setStatus }) {
  return (
    <div className="relative mb-5 flex flex-col gap-5 leading-5">
      <p className="w-[85%]">
        [Your Company Letterhead]
        <br />
        <br />
        [Date]
        <br />
        <br />
        [Recipient's Name]
        <br />
        [Recipient's Title]
        <br />
        [Recipient's Company Name]
        <br />
        [Recipient's Company Address]
        <br />
        [City, State, Zip Code]
        <br />
        <br />
        Dear [Recipient's Name],
        <br />
        <br />
        Subject: Proposal for Marketing and Advertising Services for Product
        Launch Campaign
        <br />
        <br />
        We are thrilled to present our proposal for the marketing and
        advertising services solicited by [Recipient's Company Name] for your
        upcoming product launch campaign. [Your Company Name] is a full-service
        marketing agency with a proven track record in propelling brands to
        market leadership through innovative and strategically-driven campaigns.
        This proposal outlines our approach to fulfilling the scope of services
        and criteria outlined in your solicitation.
        <br />
        <br />
        1. Executive Summary
        <br />
        <br />
        [Your Company Name] proposes to undertake a comprehensive marketing
        campaign encompassing market research, competitor analysis, and the
        development of a dynamic brand narrative. Our experienced team will
        craft a messaging framework that resonates with your target audience and
        distinguishes your product in a competitive landscape.
        <br />
        <br />
        2. Project Understanding and Approach
        <br />
        <br />
        Market Research and Competitor Analysis: We will conduct in-depth market
        research to identify consumer behaviors, preferences, and trends
        relevant to your product category. Our competitor analysis will focus on
        identifying opportunities to position your product as a superior choice.
        <br />
        <br />
        Brand Narrative and Messaging Framework: Our creative team will
        collaborate with you to construct a compelling brand narrative that
        aligns with your company values and product strengths. We will develop a
        versatile messaging framework that can be adapted across various media
        and platforms.
        <br />
        <br />
        3. Team Qualifications
        <br />
        <br />
        Track Record: Our portfolio showcases numerous successful campaigns for
        products similar to yours, with measurable outcomes in brand awareness,
        engagement, and market share growth.
        <br />
        <br />
        Creativity and Innovation: We pride ourselves on our ability to bring
        fresh, innovative ideas to the table, as evidenced by our industry
        awards and client testimonials.
        <br />
        <br />
        Strategic Thinking: Our strategic approach is rooted in data-driven
        insights, ensuring that every creative concept is geared towards
        achieving your business objectives.
      </p>
      <div className="actions absolute right-0 top-0 flex items-center gap-5">
        <ClipboardCopyIcon />
        <button
          onClick={() => {
            // console.log("preview");
            setStatus("PREVIEW");
          }}
        >
          <PreviewIcon />
        </button>
      </div>
    </div>
  );
}
