import { Collapse } from "antd";

const text = (
  <div className="text-[0.875rem] font-normal leading-6">
    <p className="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
);
const items = [
  {
    key: "1",
    label: "What is this element?",
    children: text,
  },
  {
    key: "2",
    label: "Do I need a Regular License or an Extended License?",
    children: text,
  },
  {
    key: "3",
    label: "What is Item Support?",
    children: text,
  },
  {
    key: "4",
    label: "How to download your Item?",
    children: text,
  },
  {
    key: "5",
    label: "How to contact before purchase?",
    children: text,
  },
];

export default function Faqs() {
  return (
    <div>
      <h3 className="mb-3 text-[1.5rem] leading-10">FAQs</h3>
      <section className="min-h-[500px] rounded-2xl bg-t02-blue1 py-4">
        <Collapse
          defaultActiveKey={["3"]}
          ghost
          items={items}
          expandIconPosition="right"
        />
      </section>
    </div>
  );
}
