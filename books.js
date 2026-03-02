const BOOKS = [
  {
    id: 1,
    title: "The McKinsey Edge",
    subtitle: "Success Principles from the World's Most Powerful Consulting Firm",
    author: "Shu Hattori",
    section: "leadership",
    icon: "\u{1F3AF}",
    gradient: "linear-gradient(135deg, #f5af19, #f12711)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781259588686-L.jpg",
    summary: "47 principles distilled from McKinsey\u2019s high-performance culture, covering personal effectiveness, team leadership, process management, and lasting professional growth.",
    chapters: [
      {
        title: "Chapter 1: Building the Better Self",
        description: "Principles for personal peak performance and resilience.",
        subsections: [
          {
            label: "Get Ahead",
            items: [
              { name: "Principle 1: Focus on What Really Matters", desc: "Prioritize ruthlessly; direct energy toward highest-impact work and decisions daily" },
              { name: "Principle 2: Start with the Hard Stuff in the Morning", desc: "Tackle difficult tasks first when cognitive energy and willpower are strongest" },
              { name: "Principle 3: Catch Small Signals and Make a Difference", desc: "Notice subtle cues in people and situations to preempt problems early" },
              { name: "Principle 4: Have a 30-Second Answer to Everything", desc: "Prepare concise, structured responses to convey ideas with clarity and speed" },
              { name: "Principle 5: Frontload Your Project", desc: "Do the heavy lifting early so you can iterate and refine downstream" },
              { name: "Principle 6: Create the Right End Output Image", desc: "Visualize the final deliverable before starting to align effort with outcome" }
            ]
          },
          {
            label: "Hang Tight",
            items: [
              { name: "Principle 7: Smile When You Are Under Stress", desc: "Maintain composure under pressure to project confidence and steady the team" },
              { name: "Principle 8: Go Beyond Your Self-Perceived Limit", desc: "Push past comfort zones to discover untapped capability and accelerate growth" },
              { name: "Principle 9: Always Imagine the Worst-Case Scenario", desc: "Stress-test plans by anticipating failure modes and preparing contingencies in advance" },
              { name: "Principle 10: Start Following Up", desc: "Build accountability through consistent follow-up on commitments and open items" },
              { name: "Principle 11: Push Back with Less Emotion", desc: "Challenge ideas constructively with data and logic, not reactive emotion" }
            ]
          },
          {
            label: "Multiple Reflections",
            items: [
              { name: "Principle 12: Be Flexible on the Perception of Your Passion", desc: "Adapt how you express drive to different audiences and contexts" },
              { name: "Principle 13: \"What Would Marvin Do?\"", desc: "Use role models as mental frameworks for navigating ambiguous leadership decisions" },
              { name: "Principle 14: Know What Gives You the Most Energy in Your Day", desc: "Identify personal peak-energy activities to sustain motivation and output" },
              { name: "Principle 15: Go Jogging to Smell the Flowers", desc: "Create space for physical activity and reflection to recharge and gain perspective" },
              { name: "Principle 16: Create a Commitment Plan", desc: "Formalize your goals with timelines and milestones to turn intentions into action" }
            ]
          }
        ]
      },
      {
        title: "Chapter 2: Growing with Others",
        description: "Principles for communication, connection, and leading people.",
        subsections: [
          {
            label: "Communication",
            items: [
              { name: "Principle 17: Always Memorize the First Three Sentences of a Presentation", desc: "Nail the opening to establish credibility and set the tone" },
              { name: "Principle 18: Communicate Using Fewer Words", desc: "Strip away filler to make every word count and respect your audience\u2019s time" },
              { name: "Principle 19: Pause Three Seconds Before Answering Difficult Questions", desc: "Use strategic pauses to compose thoughtful, deliberate responses under pressure" },
              { name: "Principle 20: Question More and Talk Less", desc: "Lead through inquiry to surface better insights and empower team thinking" },
              { name: "Principle 21: Turn No into Yes", desc: "Reframe objections as opportunities by finding creative paths to mutual agreement" },
              { name: "Principle 22: Don\u2019t Show Half-Baked Output", desc: "Only present polished, complete work to protect credibility and team confidence" }
            ]
          },
          {
            label: "Connection",
            items: [
              { name: "Principle 23: Instantly Find a Connection in the Room", desc: "Build rapport quickly by identifying shared interests or common ground" },
              { name: "Principle 24: Be a Giver, Not a Receiver", desc: "Lead with generosity; invest in others\u2019 success before expecting returns" },
              { name: "Principle 25: Find the Best Intent in People", desc: "Assume positive intent to build trust and reduce interpersonal friction" },
              { name: "Principle 26: Learn Team Members\u2019 Defining Moments and Personal Sides", desc: "Understand what shaped your people to lead them more effectively" },
              { name: "Principle 27: Think of Everyone as a Helpful Individual, Not a \"Resource\"", desc: "Treat colleagues as whole people, not interchangeable inputs" },
              { name: "Principle 28: Go Out for a Meal with Interesting People Every Week", desc: "Expand your network deliberately through regular informal relationship building" }
            ]
          },
          {
            label: "Understanding",
            items: [
              { name: "Principle 29: Consciously Gauge Your People", desc: "Actively assess team members\u2019 strengths, motivations, and development needs" },
              { name: "Principle 30: Assign Team Members Meaningful Tasks", desc: "Match work to people\u2019s growth areas and strengths for engagement" },
              { name: "Principle 31: Create Followership Through Deliberate On-the-Job Coaching", desc: "Develop loyalty and capability by coaching in the flow of real work" },
              { name: "Principle 32: Deliver Feedback Using Positive Criticism", desc: "Frame constructive feedback in a way that motivates change rather than defensiveness" },
              { name: "Principle 33: Remember to Give Praise", desc: "Recognize contributions explicitly and specifically to reinforce desired behaviors" }
            ]
          }
        ]
      },
      {
        title: "Chapter 3: Excelling in Process Management",
        description: "Principles for productivity, meetings, and operational excellence.",
        subsections: [
          {
            label: "Productivity Themes and Enablers",
            items: [
              { name: "Principle 34: Always Prepare an Agenda Before Meetings", desc: "Set clear objectives and structure for every meeting to maximize productivity" },
              { name: "Principle 35: Create \"Four Boxes\" To Dos", desc: "Organize tasks by urgency and importance to prioritize effectively" },
              { name: "Principle 36: Focus on Outcomes Not Activities", desc: "Measure success by results delivered, not hours or effort expended" },
              { name: "Principle 37: Know Your Meeting Modes in Advance", desc: "Clarify whether a meeting is for decision, input, or information sharing" },
              { name: "Principle 38: Proactively Manage E-mail Communication Using the 5D Rules", desc: "Triage email with Do, Delegate, Defer, Delete, or Deposit to stay organized" },
              { name: "Principle 39: Speak Up as Early as Possible", desc: "Raise concerns and ideas early when they can still influence the outcome" },
              { name: "Principle 40: Create a Minimalist Presentation Tool Kit", desc: "Build reusable templates and formats to accelerate high-quality output" },
              { name: "Principle 41: Create an Easy-to-Use Template for Updates", desc: "Standardize status reporting so teams spend less time on format, more on content" }
            ]
          }
        ]
      },
      {
        title: "Chapter 4: Going the Extra Mile",
        description: "Principles for achieving lasting professional growth and impact.",
        subsections: [
          {
            label: "The Challenge to Achieve Lasting Growth",
            items: [
              { name: "Principle 42: Give Away Knowledge and Tools Unsparingly", desc: "Share expertise generously to build organizational capability and your own reputation" },
              { name: "Principle 43: Get Rid of Your Physical Barriers", desc: "Remove environmental obstacles that drain energy or block productive focus" },
              { name: "Principle 44: Ask the Second Order Questions", desc: "Push past surface answers to uncover root causes and deeper strategic insight" },
              { name: "Principle 45: Learn to Write Fewer Notes", desc: "Capture only the essential; brevity forces clarity in thinking and communication" },
              { name: "Principle 46: Prepare to Renew Your Life", desc: "Plan career transitions deliberately; reinvention requires foresight and preparation" },
              { name: "Principle 47: Create Your Own \"Profile\" as a Leader", desc: "Define your unique leadership brand and make it visible through consistent actions" }
            ]
          }
        ]
      },
      {
        title: "Chapter 5: Become a Thinker and a Writer",
        description: "Cultivating deep thinking and clear writing as leadership differentiators.",
        subsections: [
          {
            label: "Key Ideas",
            items: [
              { name: "Thinking Sets Leaders Apart", desc: "Cultivate deep analytical thinking as a differentiator beyond operational execution" },
              { name: "Marvin Bower on the Value of Writing", desc: "Use writing as a tool to sharpen thinking and communicate with precision" }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "A CEO for All Seasons",
    author: "Carolyn Dewar, Scott Keller, Vikram Malhotra, Vik Malhotra",
    section: "leadership",
    icon: "\u{1F451}",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781668098349-L.jpg",
    altCoverUrls: [
      "https://books.google.com/books/content?id=EEtCEQAAQBAJ&printsec=frontcover&img=1&zoom=1",
      "https://covers.openlibrary.org/b/isbn/9781668098356-L.jpg"
    ],
    summary: "A comprehensive guide from McKinsey on how to excel at every stage of the CEO journey\u2014from preparing for the role through leaving a lasting legacy, featuring case studies from Dell, Merck, Nasdaq, and more.",
    chapters: [
      { title: "Part I: Spring \u2014 Preparing to Lead", description: "How aspiring CEOs should prepare for the transition.", subsections: [{ label: "Key Themes", items: [{ name: "Stepping Up to the Role", desc: "How aspiring CEOs should prepare for the transition before they take the seat" }, { name: "The Blind Spots Survey", desc: "Research-based data on what catches new CEOs off guard most often" }] }] },
      { title: "Part II: Summer \u2014 Starting Strong (First 100 Days)", description: "Critical priorities for a new CEO\u2019s first months.", subsections: [{ label: "Key Themes", items: [{ name: "Building the Right Team Early", desc: "Prioritize leadership team composition and alignment in the first critical months" }, { name: "Setting the Strategic Agenda", desc: "Define the bold direction and communicate it with clarity from day one" }, { name: "Establishing Credibility with the Board", desc: "Build trust through transparency, preparation, and early quick wins" }] }] },
      { title: "Part III: Fall \u2014 Sustaining Momentum (Mid-Tenure)", description: "Maintaining energy and driving transformation through the middle years.", subsections: [{ label: "Key Themes", items: [{ name: "Driving Organizational Transformation", desc: "Scale change programs and maintain energy through the messy middle period" }, { name: "Managing Through Crisis", desc: "Navigate disruptions with decisiveness while preserving long-term strategic direction" }, { name: "Staying Personally Effective", desc: "Guard against CEO fatigue, information overload, and insularity during long tenures" }] }] },
      { title: "Part IV: Winter \u2014 Ensuring Legacy (Late Tenure & Succession)", description: "Planning succession and defining lasting impact.", subsections: [{ label: "Key Themes", items: [{ name: "Planning Succession Deliberately", desc: "Start early, build a pipeline, and manage the transition without destabilizing the organization" }, { name: "Leaving a Lasting Impact", desc: "Define what enduring value you created beyond financial returns" }, { name: "Case Studies", desc: "Leadership journeys from executives at Dell, Merck, Nasdaq, Morgan Stanley, Blackstone, ASML, and Chevron" }] }] }
    ]
  },
  {
    id: 3,
    title: "CEO Excellence",
    subtitle: "The Six Mindsets That Distinguish the Best Leaders from the Rest",
    author: "Carolyn Dewar, Scott Keller, Vikram Malhotra",
    section: "leadership",
    icon: "\u{1F31F}",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781982179670-L.jpg",
    summary: "Based on McKinsey research, this book identifies six mindsets that separate exceptional CEOs from the rest, covering direction-setting, organization alignment, leader mobilization, stakeholder and board management, and personal effectiveness.",
    chapters: [
      { title: "Mindset 1: Direction-Setting \u2014 Be Bold", description: "Setting transformative strategic direction.", subsections: [{ label: "Key Themes", items: [{ name: "Vision: Reframe the Game", desc: "Redefine the playing field rather than optimizing within existing constraints" }, { name: "Strategy: Make Big Moves Early", desc: "Allocate resources decisively toward a few transformative bets" }, { name: "Resource Allocation: Act Like an Outsider", desc: "Reallocate capital as aggressively as a new owner would" }] }] },
      { title: "Mindset 2: Organization Alignment \u2014 Treat the Soft Stuff as Hard Stuff", description: "Building culture, structure, and talent to execute strategy.", subsections: [{ label: "Key Themes", items: [{ name: "Culture: Find the One Thing", desc: "Identify the single cultural shift that will unlock the strategy" }, { name: "Organization Design: Solve for \"Manageability\"", desc: "Simplify structures so leaders can actually lead their spans of control" }, { name: "Talent: Rotate the Inner Circle", desc: "Continuously upgrade and refresh the leadership team without sentimentality" }] }] },
      { title: "Mindset 3: Mobilizing Leaders \u2014 Solve for the Team\u2019s Psychology", description: "Building a top team that works as a cohesive unit.", subsections: [{ label: "Key Themes", items: [{ name: "Team Composition: Pick Wisely", desc: "Select leaders for capability and chemistry, not just track record" }, { name: "Teamwork: Script the Critical Moves", desc: "Design processes so the top team works as a unit, not a collection of stars" }, { name: "Operating Rhythm: Align the Cadence", desc: "Create structured routines that keep the organization synchronized and accountable" }] }] },
      { title: "Mindset 4: Stakeholder Management \u2014 Start with \"Why?\"", description: "Managing stakeholder relationships authentically.", subsections: [{ label: "Key Themes", items: [{ name: "Social Purpose: Look Beyond Shareholder Value", desc: "Embrace a broader mission that attracts talent and builds trust" }, { name: "Customer and Partner Engagement: Act with Authenticity", desc: "Build genuine relationships with stakeholders, not performative ones" }, { name: "External Communications: Control the Narrative", desc: "Shape the public story proactively rather than reacting to events" }] }] },
      { title: "Mindset 5: Board Management \u2014 Help Directors Help the Business", description: "Making the board a strategic asset.", subsections: [{ label: "Key Themes", items: [{ name: "Board Composition: Curate the Right Mix", desc: "Assemble a board with complementary skills and constructive challenge" }, { name: "Board Interactions: Run Meetings That Matter", desc: "Use board time for strategic debate, not administrative updates" }, { name: "Board Relationship: Build Trust Through Transparency", desc: "Share bad news early and frame problems honestly" }] }] },
      { title: "Mindset 6: Personal Effectiveness \u2014 Do What Only You Can Do", description: "Managing yourself as the scarcest resource.", subsections: [{ label: "Key Themes", items: [{ name: "Time and Energy: Manage Your Scarcest Resources", desc: "Protect calendar ruthlessly for highest-leverage activities" }, { name: "Leadership Model: Choose What Kind of Leader to Be", desc: "Define a personal operating model that fits your strengths" }, { name: "Perspective: Stay Grounded and Curious", desc: "Maintain humility, seek disconfirming data, and keep learning" }] }] }
    ]
  },
  {
    id: 4,
    title: "Rewired",
    subtitle: "The McKinsey Guide to Outcompeting in the Age of Digital and AI",
    author: "Eric Lamarre, Kate Smaje, Rodney Zemmel",
    section: "leadership",
    icon: "\u{26A1}",
    gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781394207114-L.jpg",
    altCoverUrls: [
      "https://books.google.com/books/content?id=DjDFEAAAQBAJ&printsec=frontcover&img=1&zoom=1",
      "https://covers.openlibrary.org/b/isbn/9781394207121-L.jpg"
    ],
    summary: "A comprehensive field guide from McKinsey Digital on enterprise-wide digital and AI transformation\u2014covering roadmaps, talent, operating models, technology, data, and adoption at scale.",
    chapters: [
      { title: "Introduction", description: "Digital transformation is about rewiring the entire enterprise, not running isolated tech projects.", subsections: [{ label: "Key Themes", items: [{ name: "Enterprise Capabilities for Competitive Advantage", desc: "Digital transformation is about rewiring the entire enterprise, not running isolated tech projects" }] }] },
      { title: "Section One: Creating the Transformation Roadmap", description: "Aligning leadership and prioritizing where digital creates the most value.", subsections: [{ label: "Chapters", items: [{ name: "Ch 1: Get Your Top Team Inspired and Aligned", desc: "Build shared vision, alignment, and commitment among senior leaders first" }, { name: "Ch 2: Choose the Right Transformation \"Bite Size\"", desc: "Use a domain-based approach to prioritize where digital creates most value" }, { name: "Ch 3: Have Business Leaders Define What\u2019s Possible", desc: "Let business owners, not IT, identify high-impact use cases including gen AI" }, { name: "Ch 4: Figure Out What Resources You Need", desc: "Design pod composition, archetypes, and estimate talent needs for execution" }, { name: "Ch 5: Build Capabilities for Now and the Next Decade", desc: "Assess foundational digital capabilities and invest in long-term skill building" }] }] },
      { title: "Section Two: Building a Talent Bench", description: "Investing in leadership upskilling and broad reskilling.", subsections: [{ label: "Chapters", items: [{ name: "Ch 6: Invest Initially in the Leadership Team", desc: "Upskill senior leaders first so they can credibly drive digital programs" }, { name: "Ch 7: Build Broad Learning Programs That Can Scale", desc: "Create scalable reskilling pathways that reach beyond the digital core team" }, { name: "Ch 8: Reskill Pivotal Business Roles", desc: "Target high-impact roles where digital fluency transforms business outcomes" }] }] },
      { title: "Section Three: Adopting a New Operating Model", description: "Cross-functional agile pods and product management discipline.", subsections: [{ label: "Chapters", items: [{ name: "Ch 9: Stand Up Cross-Functional Agile Pods", desc: "Organize around autonomous, cross-functional teams with clear product ownership" }, { name: "Ch 10: Embed Product Management Discipline", desc: "Treat digital solutions as products with roadmaps, backlogs, and continuous iteration" }, { name: "Ch 11: Scale the Operating Model Across the Enterprise", desc: "Extend agile ways of working from pilots to the full organization" }] }] },
      { title: "Section Four: Producing a Distributed Technology Environment", description: "Modernizing architecture and building robust DevOps/MLOps pipelines.", subsections: [{ label: "Chapters", items: [{ name: "Ch 12: Modernize the Technology Architecture", desc: "Move to modular, API-driven, cloud-native infrastructure for speed and flexibility" }, { name: "Ch 13: Build a Robust DevOps and MLOps Pipeline", desc: "Automate CI/CD and model deployment to accelerate release cycles and reliability" }, { name: "Ch 14: Manage Technical Debt and Cybersecurity Risks", desc: "Balance innovation velocity with security, compliance, and system health" }] }] },
      { title: "Section Five: Embedding Data Everywhere", description: "Treating data as a product with governance that enables, not blocks.", subsections: [{ label: "Chapters", items: [{ name: "Ch 15: Treat Data as a Product", desc: "Assign ownership, quality standards, and governance to data domains like product lines" }, { name: "Ch 16: Build a Scalable Data Architecture and Platform", desc: "Design infrastructure that democratizes data access across the enterprise" }, { name: "Ch 17: Establish Data Governance That Enables, Not Blocks", desc: "Create guardrails that protect data while enabling broad analytical use" }] }] },
      { title: "Section Six: Unlocking User Adoption", description: "Designing for adoption and measuring business impact.", subsections: [{ label: "Chapters", items: [{ name: "Ch 18: Design for Adoption from Day One", desc: "Build change management and user experience into every solution, not as an afterthought" }, { name: "Ch 19: Measure What Matters for Business Impact", desc: "Track outcomes (revenue, cost, NPS) not just delivery velocity or feature count" }, { name: "Ch 20: Sustain and Scale Adoption Over Time", desc: "Ensure solutions stick through feedback loops, continuous improvement, and executive sponsorship" }] }] },
      { title: "Section Seven: Transformation Journey Stories", description: "Real-world case studies of digital transformation at scale.", subsections: [{ label: "Case Studies", items: [{ name: "Freeport-McMoRan Turns Data into Value", desc: "A copper mining company\u2019s AI transformation journey and lessons" }, { name: "DBS: A Multinational Bank Becomes a Digital Bank", desc: "How a leading Asian bank rewired itself for digital-first operations" }, { name: "The Future of Play Takes Shape at the LEGO Group", desc: "A global toy brand\u2019s digital transformation and innovation journey" }] }] }
    ]
  },
  {
    id: 5,
    title: "True North: Emerging Leader Edition",
    author: "Bill George and Zach Clayton",
    section: "leadership",
    icon: "\u{1F9ED}",
    gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781119886105-L.jpg",
    summary: "An updated guide to authentic leadership that helps emerging leaders discover their life story, develop self-awareness, live their values, and empower others\u2014featuring Satya Nadella, Mary Barra, Indra Nooyi, and 48 new interviewees.",
    chapters: [
      { title: "Chapter 1: Your Life Story", description: "Every leader\u2019s journey begins with understanding the experiences that formed them.", subsections: [{ label: "Key Ideas", items: [{ name: "Discover How Your Life Narrative Shapes Your Leadership", desc: "Every leader\u2019s journey begins with understanding the experiences that formed them" }] }] },
      { title: "Chapter 2: Crucibles of Leadership", description: "The most defining leadership moments emerge from the hardest personal trials.", subsections: [{ label: "Key Ideas", items: [{ name: "Transform Adversity into Leadership Strength", desc: "The most defining leadership moments often emerge from the hardest personal trials" }] }] },
      { title: "Chapter 3: Leading Without a Moral Compass", description: "What happens when leaders abandon values.", subsections: [{ label: "Key Ideas", items: [{ name: "Cautionary Tales of Leaders Who Lost Their Way", desc: "Case studies (including Zuckerberg and Holmes) of what happens when leaders abandon values" }] }] },
      { title: "Chapter 4: The Journey to Self-Awareness", description: "Self-awareness as the foundation of effective leadership.", subsections: [{ label: "Key Ideas", items: [{ name: "Know Yourself to Lead Others Authentically", desc: "Self-awareness is the single biggest determinant of leadership effectiveness" }] }] },
      { title: "Chapter 5: Living Your Values", description: "Anchoring leadership in personal ethical standards.", subsections: [{ label: "Key Ideas", items: [{ name: "Anchor Leadership in Personal Ethical Standards", desc: "Values are tested under pressure; define them before the crisis arrives" }] }] },
      { title: "Chapter 6: Finding Your Sweet Spot", description: "Operating at the intersection of strengths and motivations.", subsections: [{ label: "Key Ideas", items: [{ name: "Operate at the Intersection of Strengths and Motivations", desc: "Peak performance comes from aligning what you\u2019re great at with what energizes you" }] }] },
      { title: "Chapter 7: Leading an Integrated Life", description: "Balancing career, family, community, and self.", subsections: [{ label: "Key Ideas", items: [{ name: "Balance Career, Family, Community, and Self", desc: "Integrated leaders make better decisions because they have perspective and support" }] }] },
      { title: "Chapter 8: Empowering Others to Lead", description: "Shifting from personal achievement to enabling team success.", subsections: [{ label: "Key Ideas", items: [{ name: "Shift from Personal Achievement to Enabling Team Success", desc: "The highest-impact leaders multiply their influence by developing others" }] }] },
      { title: "Chapter 9: Global Leadership for the 21st Century", description: "Leading across cultures, borders, and complex systems.", subsections: [{ label: "Key Ideas", items: [{ name: "Lead Across Cultures, Borders, and Complex Systems", desc: "Modern leaders must navigate global interconnection with humility and adaptability" }] }] }
    ]
  },
  {
    id: 6,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    section: "leadership",
    icon: "\u{1F4AA}",
    gradient: "linear-gradient(135deg, #fc5c7d, #6a82fb)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781982137274-L.jpg",
    summary: "Covey\u2019s timeless framework for personal and interpersonal effectiveness, built on character-based principles: move from dependence to independence (Private Victory), then to interdependence (Public Victory), sustained by continuous renewal.",
    chapters: [
      { title: "Part One: Paradigms and Principles", description: "The foundation: character-based effectiveness.", subsections: [{ label: "Key Ideas", items: [{ name: "Inside-Out Approach to Effectiveness", desc: "True change starts with character and principles, not personality-driven techniques" }] }] },
      { title: "Part Two: Private Victory", description: "Moving from dependence to independence.", subsections: [{ label: "Habits", items: [{ name: "Habit 1: Be Proactive", desc: "Take responsibility for your responses; you choose how external events affect you" }, { name: "Habit 2: Begin with the End in Mind", desc: "Define your mission and values before acting so effort aligns with purpose" }, { name: "Habit 3: Put First Things First", desc: "Execute on priorities through disciplined time management, not urgent distractions" }] }] },
      { title: "Part Three: Public Victory", description: "Moving from independence to interdependence.", subsections: [{ label: "Habits", items: [{ name: "Habit 4: Think Win-Win", desc: "Seek mutually beneficial outcomes in every interaction to build lasting trust" }, { name: "Habit 5: Seek First to Understand, Then to Be Understood", desc: "Listen deeply before advocating; empathic listening unlocks influence" }, { name: "Habit 6: Synergize", desc: "Combine diverse strengths to create outcomes greater than any individual could achieve alone" }] }] },
      { title: "Part Four: Renewal", description: "Sustaining performance through continuous renewal.", subsections: [{ label: "Habits", items: [{ name: "Habit 7: Sharpen the Saw", desc: "Invest continuously in physical, mental, social, and spiritual renewal to sustain performance" }] }] }
    ]
  },
  {
    id: 7,
    title: "Machine, Platform, Crowd",
    subtitle: "Harnessing Our Digital Future",
    author: "Andrew McAfee and Erik Brynjolfsson",
    section: "ai-trends",
    icon: "\u{1F916}",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780393254297-L.jpg",
    summary: "A framework for understanding the three great rebalancings of the digital age: mind vs. machine, product vs. platform, and core vs. crowd\u2014and how leaders should navigate each shift.",
    chapters: [
      { title: "Part One: Mind and Machine", description: "The evolving relationship between human judgment and algorithmic intelligence.", subsections: [{ label: "Chapters", items: [{ name: "Ch 1: \"All the News That\u2019s Fit to Print\"", desc: "How algorithmic prediction now outperforms human judgment in many domains" }, { name: "Ch 2: The Decline of the HiPPO", desc: "Data-driven decisions are replacing the Highest-Paid Person\u2019s Opinion in organizations" }, { name: "Ch 3: Don\u2019t Automate, Augment", desc: "The most powerful approach combines human judgment with machine intelligence" }, { name: "Ch 4: Superhuman Pattern Recognition", desc: "AI systems now detect patterns in data far beyond human cognitive capacity" }, { name: "Ch 5: The Next Step in Automation", desc: "Machine learning is automating not just manual labor but cognitive work" }] }] },
      { title: "Part Two: Product and Platform", description: "How platforms are reshaping entire industries.", subsections: [{ label: "Chapters", items: [{ name: "Ch 6: The Rise of the Platform", desc: "Platforms create value by connecting producers and consumers, not by owning assets" }, { name: "Ch 7: Network Effects and Power Laws", desc: "Winner-take-most dynamics emerge from the self-reinforcing growth of platform ecosystems" }, { name: "Ch 8: Platforms Are Eating the World", desc: "Traditional product companies must adapt or be disrupted by platform business models" }, { name: "Ch 9: Strategies for the Platform Age", desc: "Incumbents can compete by building complementary platforms or becoming best-in-class participants" }] }] },
      { title: "Part Three: Core and Crowd", description: "Harnessing decentralized innovation and new forms of trust.", subsections: [{ label: "Chapters", items: [{ name: "Ch 10: The Power of the Crowd", desc: "Decentralized innovation from large groups can outperform centralized corporate R&D" }, { name: "Ch 11: Knowledge, Crowds, and Expertise", desc: "Crowds are most powerful for aggregation; experts still lead for deep specialization" }, { name: "Ch 12: Currency, Crowd, and Trust", desc: "New forms of trust (blockchain, reputation systems) enable unprecedented distributed collaboration" }, { name: "Ch 13: Strategies for the Crowd Age", desc: "Organizations must learn to harness open innovation while protecting core capabilities" }] }] }
    ]
  },
  {
    id: 8,
    title: "A Survival Guide to the Misinformation Age",
    subtitle: "Scientific Habits of Mind",
    author: "David J. Helfand",
    section: "ai-trends",
    icon: "\u{1F52C}",
    gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780231168724-L.jpg",
    summary: "A toolkit for developing scientific habits of mind\u2014numerical fluency, statistical literacy, logical reasoning, and evidence-based thinking\u2014to navigate the modern information landscape.",
    chapters: [
      { title: "Introduction: Information, Misinformation, and Our Planet\u2019s Future", description: "The information explosion demands scientific thinking.", subsections: [{ label: "Key Ideas", items: [{ name: "The Case for Scientific Thinking", desc: "The information explosion demands scientific thinking to separate signal from noise" }] }] },
      { title: "Ch 1: A Walk in the Park", description: "Observing the natural world.", subsections: [{ label: "Key Ideas", items: [{ name: "Systematic Observation", desc: "Observing the natural world reveals how much we miss without systematic inquiry" }] }] },
      { title: "Ch 2: What Is Science?", description: "Defining the scientific method.", subsections: [{ label: "Key Ideas", items: [{ name: "Falsifiability as Foundation", desc: "Science is defined by falsifiability, not authority; understanding this is the first defense" }] }] },
      { title: "Ch 3: A Sense of Scale", description: "Understanding orders of magnitude.", subsections: [{ label: "Key Ideas", items: [{ name: "Orders of Magnitude", desc: "Grasping orders of magnitude prevents manipulation by large or small numbers" }] }] },
      { title: "Interlude 1: Numbers", description: "Building numerical fluency.", subsections: [{ label: "Key Ideas", items: [{ name: "Numerical Fluency", desc: "Build numerical fluency to detect when statistics are being weaponized or distorted" }] }] },
      { title: "Ch 4: Discoveries on the Back of an Envelope", description: "Quick estimation skills.", subsections: [{ label: "Key Ideas", items: [{ name: "Fermi Estimation", desc: "Quick estimation skills let you reality-check claims without deep research" }] }] },
      { title: "Ch 5: Insights in Lines and Dots", description: "Reading and interpreting graphs.", subsections: [{ label: "Key Ideas", items: [{ name: "Graph Literacy", desc: "Reading and interpreting graphs correctly is critical to understanding data-driven arguments" }] }] },
      { title: "Interlude 2: Language and Logic", description: "Precision in reasoning.", subsections: [{ label: "Key Ideas", items: [{ name: "Logical Reasoning", desc: "Precision in language and logical reasoning forms the backbone of critical analysis" }] }] },
      { title: "Ch 6: Expecting the Improbable", description: "Understanding probability.", subsections: [{ label: "Key Ideas", items: [{ name: "Probability Intuition", desc: "Probability intuition is poor; understanding base rates prevents common reasoning errors" }] }] },
      { title: "Ch 7: Lies, Damned Lies, and Statistics", description: "Statistical literacy.", subsections: [{ label: "Key Ideas", items: [{ name: "Statistical Literacy", desc: "Statistical literacy is essential to distinguish genuine patterns from misleading data" }] }] },
      { title: "Ch 8: Correlation, Causation\u2026 Confusion and Clarity", description: "Distinguishing association from causation.", subsections: [{ label: "Key Ideas", items: [{ name: "Causation vs. Correlation", desc: "Most false claims exploit the confusion between association and actual causation" }] }] },
      { title: "Ch 9: Definitional Features of Science", description: "Core principles of genuine science.", subsections: [{ label: "Key Ideas", items: [{ name: "Scientific Principles", desc: "Core principles that separate genuine scientific inquiry from pseudoscience" }] }] },
      { title: "Ch 10: Applying Scientific Habits of Mind to Earth\u2019s Future", description: "Evidence-based reasoning for climate change.", subsections: [{ label: "Key Ideas", items: [{ name: "Applied Scientific Thinking", desc: "Use the toolkit on climate change as a model for evidence-based reasoning" }] }] },
      { title: "Ch 11: What Isn\u2019t Science", description: "Identifying non-science.", subsections: [{ label: "Key Ideas", items: [{ name: "Pseudoscience Detection", desc: "Identifying non-science (astrology, homeopathy) sharpens understanding of what science actually is" }] }] },
      { title: "Ch 12: The Triumph of Misinformation; The Peril of Ignorance", description: "How misinformation wins.", subsections: [{ label: "Key Ideas", items: [{ name: "The Misinformation Problem", desc: "How misinformation wins when scientific literacy is absent from public discourse" }] }] },
      { title: "Ch 13: The Unfinished Cathedral", description: "Science as an ongoing project.", subsections: [{ label: "Key Ideas", items: [{ name: "Embracing Uncertainty", desc: "Science is an ongoing project; embracing uncertainty is a feature, not a flaw" }] }] }
    ]
  },
  {
    id: 9,
    title: "Tools and Weapons",
    subtitle: "The Promise and the Peril of the Digital Age",
    author: "Brad Smith and Carol Ann Browne",
    section: "ai-trends",
    icon: "\u{1F6E1}\uFE0F",
    gradient: "linear-gradient(135deg, #434343, #000000)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781984877710-L.jpg",
    summary: "Microsoft\u2019s president explores the duality of technology as both tool and weapon\u2014covering surveillance, privacy, cybersecurity, AI ethics, digital diplomacy, and the geopolitical implications of the tech age.",
    chapters: [
      { title: "Ch 1: Surveillance", description: "Government mass surveillance and tech.", subsections: [{ label: "Key Ideas", items: [{ name: "Government Mass Surveillance", desc: "How government mass surveillance programs reshaped the relationship between tech and the state" }] }] },
      { title: "Ch 2: Technology and Public Safety", description: "Balancing access and privacy.", subsections: [{ label: "Key Ideas", items: [{ name: "Balancing Access and Privacy", desc: "Balancing law enforcement access to data with individual privacy protections" }] }] },
      { title: "Ch 3: Privacy", description: "Personal data protection.", subsections: [{ label: "Key Ideas", items: [{ name: "Personal Data Protection", desc: "The evolving battle over personal data protection in the age of ubiquitous data collection" }] }] },
      { title: "Ch 4: Cybersecurity", description: "Defending infrastructure.", subsections: [{ label: "Key Ideas", items: [{ name: "Defending Infrastructure", desc: "Defending infrastructure and institutions from increasingly sophisticated cyberattacks" }] }] },
      { title: "Ch 5: Protecting Democracy", description: "Tech and democratic processes.", subsections: [{ label: "Key Ideas", items: [{ name: "Tech and Democracy", desc: "Technology\u2019s role in both enabling and threatening democratic processes and elections" }] }] },
      { title: "Ch 6: Social Media", description: "Misinformation amplification.", subsections: [{ label: "Key Ideas", items: [{ name: "Misinformation Amplification", desc: "Platform amplification of misinformation and its corrosive effects on public discourse" }] }] },
      { title: "Ch 7: Digital Diplomacy", description: "Tech as foreign policy.", subsections: [{ label: "Key Ideas", items: [{ name: "Tech as Foreign Policy Tool", desc: "How nation-states use technology as a tool of foreign policy and geopolitical competition" }] }] },
      { title: "Ch 8: Consumer Privacy and the Cloud", description: "Data sovereignty.", subsections: [{ label: "Key Ideas", items: [{ name: "Data Sovereignty", desc: "Cloud computing raises new questions about data sovereignty and cross-border access" }] }] },
      { title: "Ch 9: The Rural Broadband Gap", description: "Digital inequality.", subsections: [{ label: "Key Ideas", items: [{ name: "Digital Inequality", desc: "Digital inequality leaves rural communities behind in economic opportunity and access" }] }] },
      { title: "Ch 10: The Talent Gap and Immigration", description: "Workforce and policy.", subsections: [{ label: "Key Ideas", items: [{ name: "Workforce and Policy", desc: "Tech sector workforce needs collide with immigration policy constraints" }] }] },
      { title: "Ch 11: The Ethics and Economics of AI", description: "AI moral dilemmas.", subsections: [{ label: "Key Ideas", items: [{ name: "AI Moral Dilemmas", desc: "Moral dilemmas in AI deployment, from bias in hiring to autonomous weapons" }] }] },
      { title: "Ch 12: AI and the Face", description: "Facial recognition.", subsections: [{ label: "Key Ideas", items: [{ name: "Facial Recognition", desc: "Facial recognition technology raises urgent questions about consent, accuracy, and civil liberties" }] }] },
      { title: "Ch 13: AI and the Workforce", description: "Automation and reskilling.", subsections: [{ label: "Key Ideas", items: [{ name: "Automation and Reskilling", desc: "Automation will displace jobs; responsible transition requires investment in reskilling" }] }] },
      { title: "Ch 14: China and the United States", description: "Tech superpower rivalry.", subsections: [{ label: "Key Ideas", items: [{ name: "Tech Superpower Rivalry", desc: "Technology rivalry between superpowers shapes the future of global innovation governance" }] }] },
      { title: "Ch 15: Cybersecurity Threats in a Connected World (New)", description: "Escalating threats.", subsections: [{ label: "Key Ideas", items: [{ name: "Ransomware and Supply Chain Attacks", desc: "Escalating ransomware and supply chain attacks demand new defensive strategies" }] }] },
      { title: "Ch 16: Tech, Nation-States, and Geopolitics (New)", description: "State-sponsored cyber operations.", subsections: [{ label: "Key Ideas", items: [{ name: "State-Sponsored Cyber Operations", desc: "State-sponsored cyber operations blur the line between espionage and warfare" }] }] },
      { title: "Ch 17: Technology in the Pandemic (New)", description: "COVID-19 digital acceleration.", subsections: [{ label: "Key Ideas", items: [{ name: "COVID-19 Digital Acceleration", desc: "COVID-19 accelerated digital transformation and exposed critical infrastructure gaps" }] }] }
    ]
  },
  {
    id: 10,
    title: "AI Ethics",
    subtitle: "MIT Press Essential Knowledge Series",
    author: "Mark Coeckelbergh",
    section: "ai-trends",
    icon: "\u{2696}\uFE0F",
    gradient: "linear-gradient(135deg, #ff9a9e, #fecfef)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780262538190-L.jpg",
    summary: "A concise introduction to the ethical challenges of AI\u2014from bias and surveillance to responsibility gaps and policy proposals\u2014grounded in philosophy and practical application.",
    chapters: [
      { title: "Ch 1: Mirror, Mirror on the Wall", description: "AI as a mirror of human values.", subsections: [{ label: "Key Ideas", items: [{ name: "AI as Mirror", desc: "AI forces us to reflect on what it means to be human and what we value" }] }] },
      { title: "Ch 2: Superintelligence, Monsters, and the AI Apocalypse", description: "Cultural narratives about AI.", subsections: [{ label: "Key Ideas", items: [{ name: "Cultural AI Narratives", desc: "From Frankenstein to the singularity, cultural narratives shape how we perceive AI risks" }] }] },
      { title: "Ch 3: All About the Human", description: "Human-centered AI ethics.", subsections: [{ label: "Key Ideas", items: [{ name: "Human-Centered AI Ethics", desc: "AI ethics is ultimately about human values, dignity, and flourishing, not just machines" }] }] },
      { title: "Ch 4: Just Machines?", description: "AI as moral agent.", subsections: [{ label: "Key Ideas", items: [{ name: "AI as Moral Agent", desc: "Examining whether AI systems can or should be considered moral agents with responsibilities" }] }] },
      { title: "Ch 5: Privacy and Surveillance", description: "AI-powered surveillance threats.", subsections: [{ label: "Key Ideas", items: [{ name: "AI-Powered Surveillance", desc: "AI-powered surveillance creates unprecedented threats to personal autonomy and freedom" }] }] },
      { title: "Ch 6: Responsibility and Delegation", description: "Accountability gaps.", subsections: [{ label: "Key Ideas", items: [{ name: "Accountability Gaps", desc: "When AI makes decisions, accountability gaps emerge between designers, users, and machines" }] }] },
      { title: "Ch 7: Transparency and Explainability", description: "The black box problem.", subsections: [{ label: "Key Ideas", items: [{ name: "The Black Box Problem", desc: "The black-box problem: why understanding how AI decides matters for trust and justice" }] }] },
      { title: "Ch 8: Bias and Fairness", description: "Algorithmic bias.", subsections: [{ label: "Key Ideas", items: [{ name: "Algorithmic Bias", desc: "Algorithmic bias reflects and amplifies existing societal inequalities in consequential domains" }] }] },
      { title: "Ch 9: The Future of Work", description: "AI and labor markets.", subsections: [{ label: "Key Ideas", items: [{ name: "AI and Labor Markets", desc: "AI reshapes labor markets; ethical deployment requires addressing displacement and inequality" }] }] },
      { title: "Ch 10: Policy Proposals", description: "AI governance frameworks.", subsections: [{ label: "Key Ideas", items: [{ name: "AI Governance Frameworks", desc: "Regulatory frameworks and governance models for responsible AI development and deployment" }] }] },
      { title: "Ch 11: What AI Can and Cannot Do", description: "Realistic AI capabilities.", subsections: [{ label: "Key Ideas", items: [{ name: "Realistic AI Capabilities", desc: "Grounding ethical discussion in realistic understanding of current AI capabilities" }] }] },
      { title: "Ch 12: Applying AI Ethics to Real Problems", description: "From principles to practice.", subsections: [{ label: "Key Ideas", items: [{ name: "From Principles to Practice", desc: "Moving from abstract principles to concrete ethical decision-making in practice" }] }] },
      { title: "Ch 13: Conclusion", description: "The ongoing project.", subsections: [{ label: "Key Ideas", items: [{ name: "The Ongoing Project", desc: "The ongoing project of ensuring AI serves human values in an uncertain technological future" }] }] }
    ]
  },
  {
    id: 11,
    title: "Sustainable Capitalism",
    subtitle: "Essential Work for the Anthropocene",
    author: "Inara Scott (Editor)",
    section: "ai-trends",
    icon: "\u{1F30D}",
    gradient: "linear-gradient(135deg, #56ab2f, #a8e063)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781647691752-L.jpg",
    altCoverUrls: [
      "https://covers.openlibrary.org/b/isbn/9781647691745-L.jpg",
      "https://covers.openlibrary.org/b/isbn/9781647691769-L.jpg"
    ],
    summary: "A multidisciplinary exploration of whether capitalism can be reformed for sustainability\u2014examining foundations, the American model, corporate governance, human rights, cooperatives, regulation, and environmental law.",
    chapters: [
      { title: "Part I: Foundations of Capitalism", description: "Philosophical and economic underpinnings.", subsections: [{ label: "Chapters", items: [{ name: "Ch 1: Defining the Undefinable (Inara Scott)", desc: "Capitalism is an incomplete, contested concept shaped by legal and political choices" }, { name: "Ch 2: Essential Perspectives (Dana Neacsu)", desc: "Core economic and philosophical underpinnings of capitalist theory and practice" }, { name: "Ch 3: Democracy and Capitalism (Robert Prentice)", desc: "Wealth inequality creates political inequality that undermines democratic governance" }, { name: "Ch 4: The Techno-Optimist Case (Daniel R. Cahoy)", desc: "Market incentives and innovation can be harnessed to drive sustainable outcomes" }] }] },
      { title: "Part II: American Capitalism", description: "The American model in global context.", subsections: [{ label: "Chapters", items: [{ name: "Ch 5: Comparative Capitalism (Gerlinde Berger-Walliser)", desc: "European stakeholder-oriented models offer sustainability lessons for the US system" }, { name: "Ch 6: The American Model for Global Growth (David Bernell)", desc: "How American capitalism shaped global economic development and its sustainability tradeoffs" }, { name: "Ch 7: Racism and Capitalism (Elizabeth J. Kennedy)", desc: "Racialized institutions and policies have been embedded in capitalism since its founding" }] }] },
      { title: "Part III: Capitalism and Corporations", description: "Corporate governance and alternative models.", subsections: [{ label: "Chapters", items: [{ name: "Ch 8: Corporations: The Heart of American Capitalism (Ruth Jebe)", desc: "Corporate governance structures determine whether businesses serve broad or narrow interests" }, { name: "Ch 9: Capitalism and Respecting Human Rights (David Hess)", desc: "Global value chains create human rights responsibilities that businesses must address" }, { name: "Ch 10: Cooperative Ownership (Mark J. Kaswan)", desc: "Cooperative ownership offers an alternative to shareholder primacy for sustainability" }, { name: "Ch 11: Structural Barriers to Eco-Capitalism (Ryan Katz-Rosene)", desc: "Systemic economic structures prevent capitalism from achieving environmental sustainability" }] }] },
      { title: "Part IV: Institutional Structures", description: "Labor, regulation, and environmental law.", subsections: [{ label: "Chapters", items: [{ name: "Ch 12: Sustainability and Labor (Liz Brown)", desc: "Worker protections and labor standards are essential infrastructure for sustainable economies" }, { name: "Ch 13: Hybrid Corporate Social Responsibility (Rajat Panwar et al.)", desc: "CSR must evolve beyond shareholder-return logic to generate genuine societal outcomes" }, { name: "Ch 14: Smart Regulation (Victor B. Flatt, Inara Scott)", desc: "Well-designed regulation can simultaneously promote innovation and sustainability" }, { name: "Ch 15: Environmental Law (Christy Anderson Brekken)", desc: "Property rights both enable and constrain environmental protection under capitalism" }] }] }
    ]
  },
  {
    id: 12,
    title: "Cracking the PM Interview",
    subtitle: "How to Land a Product Manager Job in Technology",
    author: "Gayle Laakmann McDowell and Jackie Bavaro",
    section: "product",
    icon: "\u{1F4CB}",
    gradient: "linear-gradient(135deg, #2af598, #009efd)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780984782819-L.jpg",
    summary: "The definitive guide to landing a PM role at top tech companies, covering the PM role, resume prep, behavioral and estimation questions, product design, case questions, and company-specific interview strategies.",
    chapters: [
      { title: "Ch 1: The Product Manager Role", description: "What PMs actually do.", subsections: [{ label: "Key Ideas", items: [{ name: "What PMs Actually Do", desc: "Own the product vision, align teams, and drive execution" }] }] },
      { title: "Ch 2: Companies and Culture", description: "PM roles across companies.", subsections: [{ label: "Key Ideas", items: [{ name: "PM Roles Across Companies", desc: "How PM roles differ across Google, Facebook, Amazon, Apple, and Microsoft" }] }] },
      { title: "Ch 3: Getting the Right Experience", description: "Building PM skills.", subsections: [{ label: "Key Ideas", items: [{ name: "Building PM Skills", desc: "Build PM-relevant skills through side projects, transitions, and strategic career moves" }] }] },
      { title: "Ch 4: The Resume", description: "Crafting a PM resume.", subsections: [{ label: "Key Ideas", items: [{ name: "Crafting a PM Resume", desc: "Craft a PM resume that highlights impact, metrics, and cross-functional leadership" }] }] },
      { title: "Ch 5: Define Yourself", description: "Personal PM narrative.", subsections: [{ label: "Key Ideas", items: [{ name: "Personal PM Narrative", desc: "Develop and articulate your personal PM narrative and unique value proposition" }] }] },
      { title: "Ch 6: Behavioral Questions", description: "Structured answers.", subsections: [{ label: "Key Ideas", items: [{ name: "Structured Answers", desc: "Structure answers using frameworks to demonstrate leadership, conflict resolution, and initiative" }] }] },
      { title: "Ch 7: Estimation Questions", description: "Fermi estimation.", subsections: [{ label: "Key Ideas", items: [{ name: "Fermi Estimation", desc: "Use Fermi estimation to size markets, estimate usage, and show structured quantitative thinking" }] }] },
      { title: "Ch 8: Product Questions", description: "Product design framework.", subsections: [{ label: "Key Ideas", items: [{ name: "Product Design Framework", desc: "Design products by starting with user needs, defining success metrics, and prioritizing features" }] }] },
      { title: "Ch 9: Case Questions", description: "Business problem analysis.", subsections: [{ label: "Key Ideas", items: [{ name: "Business Problem Analysis", desc: "Analyze business problems with structured frameworks covering market entry, pricing, and strategy" }] }] },
      { title: "Ch 10: Technical Questions", description: "Technical depth for PMs.", subsections: [{ label: "Key Ideas", items: [{ name: "Technical Depth for PMs", desc: "Demonstrate enough technical depth to collaborate credibly with engineering teams" }] }] },
      { title: "Ch 11: Tips and Tricks", description: "Interview tactics.", subsections: [{ label: "Key Ideas", items: [{ name: "Interview Tactics", desc: "Tactical interview advice: preparation routines, question-asking strategy, and follow-up best practices" }] }] },
      { title: "Appendix: Company-Specific Preparation", description: "Tailored guidance.", subsections: [{ label: "Key Ideas", items: [{ name: "Tailored Guidance", desc: "Tailored guidance for PM interviews at top tech companies by role and level" }] }] }
    ]
  },
  {
    id: 13,
    title: "Product Management\u2019s Sacred Seven",
    subtitle: "The Skills to Crush PM Interviews and Be a World-Class PM",
    author: "Neel Mehta, Parth Detroja, Aditya Agashe",
    section: "product",
    icon: "\u{1F48E}",
    gradient: "linear-gradient(135deg, #c471f5, #fa71cd)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780578740584-L.jpg",
    altCoverUrls: [
      "https://books.google.com/books/content?id=EeGGzgEACAAJ&printsec=frontcover&img=1&zoom=1",
      "https://books.google.com/books/content?id=DNZHzgEACAAJ&printsec=frontcover&img=1&zoom=1"
    ],
    summary: "Seven core disciplines every product manager must master: product design, economics, psychology, UX, data science, law & policy, and marketing & growth\u2014based on interviews with 67 product leaders from 52 companies.",
    chapters: [
      { title: "Discipline 1: Product Design", description: "Designing products from user needs through feature prioritization.", subsections: [{ label: "Key Ideas", items: [{ name: "Design Frameworks", desc: "Frameworks for designing products from user needs through feature prioritization and UX tradeoffs" }] }] },
      { title: "Discipline 2: Economics", description: "Pricing, market dynamics, and business model design.", subsections: [{ label: "Key Ideas", items: [{ name: "Business Model Design", desc: "Pricing strategy, market dynamics, network effects, and business model design for product decisions" }] }] },
      { title: "Discipline 3: Psychology", description: "Behavioral science for product engagement.", subsections: [{ label: "Key Ideas", items: [{ name: "Behavioral Science", desc: "Behavioral science principles that drive user engagement, retention, and decision-making patterns" }] }] },
      { title: "Discipline 4: User Experience", description: "UX research and usability principles.", subsections: [{ label: "Key Ideas", items: [{ name: "UX Research Methods", desc: "UX research methods, usability principles, and designing interfaces that reduce friction and delight users" }] }] },
      { title: "Discipline 5: Data Science", description: "A/B testing, metrics, and analytics.", subsections: [{ label: "Key Ideas", items: [{ name: "Data-Driven Decisions", desc: "A/B testing, statistical significance, metrics selection, and avoiding common analytical pitfalls" }] }] },
      { title: "Discipline 6: Law and Policy", description: "Privacy, platform liability, and compliance.", subsections: [{ label: "Key Ideas", items: [{ name: "Product Compliance", desc: "Privacy regulations, platform liability, content moderation, and product compliance considerations" }] }] },
      { title: "Discipline 7: Marketing and Growth", description: "Growth strategies and go-to-market.", subsections: [{ label: "Key Ideas", items: [{ name: "Growth Strategy", desc: "Growth hacking methods, viral loops, acquisition channels, and go-to-market strategy for product launches" }] }] }
    ]
  },
  {
    id: 14,
    title: "Cracking the Coding Interview",
    subtitle: "189 Programming Questions and Solutions (6th Edition)",
    author: "Gayle Laakmann McDowell",
    section: "product",
    icon: "\u{1F4BB}",
    gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780984782857-L.jpg",
    summary: "The essential guide for technical interview preparation, covering data structures, algorithms, system design, and language-specific concepts with 189 practice problems and solutions.",
    chapters: [
      { title: "Part I: The Interview Process", description: "How tech hiring works and foundational concepts.", subsections: [{ label: "Key Concepts", items: [{ name: "Behind the Scenes", desc: "How tech hiring really works at top companies from resume screen to offer" }, { name: "Big O Notation", desc: "Master time and space complexity analysis as the foundation for all algorithm discussion" }] }] },
      { title: "Part II: Concepts and Algorithms", description: "Core data structures, algorithms, and problem-solving patterns.", subsections: [{ label: "Chapters", items: [{ name: "Ch 1: Arrays and Strings", desc: "Foundational data structures for in-place manipulation, hashing, and string processing" }, { name: "Ch 2: Linked Lists", desc: "Pointer manipulation, runner techniques, and common list transformation patterns" }, { name: "Ch 3: Stacks and Queues", desc: "LIFO/FIFO structures for parsing, ordering, and managing state in algorithms" }, { name: "Ch 4: Trees and Graphs", desc: "Traversal, balancing, search, and shortest-path algorithms" }, { name: "Ch 5: Bit Manipulation", desc: "Low-level operations for space-efficient solutions and systems-level problem solving" }, { name: "Ch 6: Math and Logic Puzzles", desc: "Number theory, combinatorics, and structured reasoning for constraint-based problems" }, { name: "Ch 7: Object-Oriented Design", desc: "Design patterns, class hierarchies, and system modeling for real-world software" }, { name: "Ch 8: Recursion and Dynamic Programming", desc: "Break complex problems into subproblems with memoization and optimal substructure" }, { name: "Ch 9: System Design and Scalability", desc: "Design distributed systems with load balancing, caching, sharding, and fault tolerance" }, { name: "Ch 10: Sorting and Searching", desc: "Core algorithms (merge sort, quick sort, binary search) and their complexity tradeoffs" }, { name: "Ch 11: Testing", desc: "Testing strategies, edge case identification, and quality assurance for robust software" }] }] },
      { title: "Part III: Knowledge-Based", description: "Language-specific and systems concepts.", subsections: [{ label: "Chapters", items: [{ name: "Ch 12: C and C++", desc: "Pointers, memory management, and low-level optimization" }, { name: "Ch 13: Java", desc: "Object-oriented principles, collections framework, and JVM-specific interview topics" }, { name: "Ch 14: Databases", desc: "SQL fundamentals, normalization, indexing, and query optimization" }, { name: "Ch 15: Threads and Locks", desc: "Concurrency primitives, synchronization patterns, and deadlock prevention strategies" }] }] }
    ]
  },
  {
    id: 15,
    title: "Artificial Intelligence: A Modern Approach",
    subtitle: "4th Edition (2020)",
    author: "Stuart Russell and Peter Norvig",
    section: "technical",
    icon: "\u{1F9E0}",
    gradient: "linear-gradient(135deg, #ff512f, #dd2476)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780134610993-L.jpg",
    summary: "The definitive AI textbook covering intelligent agents, search, logic, probabilistic reasoning, machine learning, deep learning, NLP, computer vision, robotics, and the philosophy and ethics of AI.",
    chapters: [
      { title: "Part I: Artificial Intelligence", description: "Foundations and agent architectures.", subsections: [{ label: "Chapters", items: [{ name: "Ch 1: Introduction", desc: "History, scope, and foundational questions of AI as a scientific and engineering discipline" }, { name: "Ch 2: Intelligent Agents", desc: "Agent architectures, rationality, task environments, and the design of autonomous systems" }] }] },
      { title: "Part II: Problem-Solving", description: "Search strategies and constraint satisfaction.", subsections: [{ label: "Chapters", items: [{ name: "Ch 3: Solving Problems by Searching", desc: "Uninformed and informed search strategies for navigating state spaces systematically" }, { name: "Ch 4: Search in Complex Environments", desc: "Local search, simulated annealing, and handling uncertainty in large search spaces" }, { name: "Ch 5: Constraint Satisfaction Problems", desc: "Modeling problems with variables, domains, and constraints for efficient solving" }, { name: "Ch 6: Adversarial Search and Games", desc: "Minimax, alpha-beta pruning, and Monte Carlo tree search for competitive environments" }] }] },
      { title: "Part III: Knowledge, Reasoning, and Planning", description: "Logic, knowledge representation, and automated planning.", subsections: [{ label: "Chapters", items: [{ name: "Ch 7: Logical Agents", desc: "Propositional logic as the foundation for knowledge representation and automated reasoning" }, { name: "Ch 8: First-Order Logic", desc: "Expressive representation of objects, relations, and quantified statements about the world" }, { name: "Ch 9: Inference in First-Order Logic", desc: "Unification, resolution, and forward/backward chaining for logical deduction" }, { name: "Ch 10: Knowledge Representation", desc: "Ontologies, semantic networks, and structured approaches to encoding world knowledge" }, { name: "Ch 11: Automated Planning", desc: "Goal-directed action sequencing using STRIPS, PDDL, and hierarchical task planning" }] }] },
      { title: "Part IV: Uncertain Knowledge and Reasoning", description: "Probability, Bayesian networks, and decision-making.", subsections: [{ label: "Chapters", items: [{ name: "Ch 12: Quantifying Uncertainty", desc: "Probability theory as the formal framework for reasoning under incomplete information" }, { name: "Ch 13: Probabilistic Reasoning", desc: "Bayesian networks for compact representation and inference over uncertain variables" }, { name: "Ch 14: Probabilistic Reasoning over Time", desc: "Hidden Markov models and Kalman filters for dynamic temporal systems" }, { name: "Ch 15: Making Simple Decisions", desc: "Utility theory and decision networks for rational choice under uncertainty" }, { name: "Ch 16: Making Complex Decisions", desc: "Sequential decision-making with Markov decision processes and value iteration" }, { name: "Ch 17: Multiagent Decision Making", desc: "Game theory, mechanism design, and coordination in systems with multiple agents" }] }] },
      { title: "Part V: Machine Learning", description: "Supervised, probabilistic, deep, and reinforcement learning.", subsections: [{ label: "Chapters", items: [{ name: "Ch 18: Learning from Examples", desc: "Supervised learning fundamentals: regression, classification, overfitting, and evaluation" }, { name: "Ch 19: Knowledge in Learning", desc: "Incorporating prior knowledge and inductive bias to improve learning efficiency" }, { name: "Ch 20: Learning Probabilistic Models", desc: "EM algorithm, Bayesian learning, and probabilistic graphical model estimation" }, { name: "Ch 21: Deep Learning", desc: "Neural network architectures, backpropagation, CNNs, RNNs, and representation learning" }, { name: "Ch 22: Reinforcement Learning", desc: "Learning optimal behavior through reward signals, exploration, and policy optimization" }] }] },
      { title: "Part VI: Communicating, Perceiving, and Acting", description: "NLP, computer vision, and robotics.", subsections: [{ label: "Chapters", items: [{ name: "Ch 23: Natural Language Processing", desc: "Language models, parsing, information extraction, and text understanding systems" }, { name: "Ch 24: Deep Learning for NLP", desc: "Transformers, attention mechanisms, and large language models for language tasks" }, { name: "Ch 25: Computer Vision", desc: "Image classification, object detection, segmentation, and visual scene understanding" }, { name: "Ch 26: Robotics", desc: "Perception, planning, and control for physical agents operating in real-world environments" }] }] },
      { title: "Part VII: Conclusions", description: "The big questions of AI.", subsections: [{ label: "Chapters", items: [{ name: "Ch 27: Philosophy, Ethics, Safety, and the Future of AI", desc: "Existential questions about AI alignment, consciousness, and societal impact" }] }] }
    ]
  },
  {
    id: 16,
    title: "AI Engineering",
    subtitle: "Building Applications with Foundation Models (2025)",
    author: "Chip Huyen (O'Reilly Media)",
    section: "technical",
    icon: "\u{1F6E0}\u{FE0F}",
    gradient: "linear-gradient(135deg, #0f2027, #2c5364)",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781098166304-L.jpg",
    summary: "A comprehensive guide to building reliable applications on top of foundation models, covering evaluation, prompt engineering, RAG, agents, finetuning, dataset engineering, inference optimization, and end-to-end AI system architecture.",
    chapters: [
      { title: "Chapter 1: Introduction to AI Engineering", description: "How foundation models created a new discipline distinct from traditional ML engineering.", subsections: [{ label: "Key Ideas", items: [{ name: "A New Discipline", desc: "How foundation models created a new discipline distinct from traditional ML engineering" }] }] },
      { title: "Chapter 2: Understanding Foundation Models", description: "Transformer architectures, training data, self-supervision, and multimodal model design.", subsections: [{ label: "Key Ideas", items: [{ name: "Foundation Model Internals", desc: "Transformer architectures, training data, self-supervision, and multimodal model design" }] }] },
      { title: "Chapter 3: Evaluation Methodology", description: "Aligning model evaluation with business KPIs and benchmarks.", subsections: [{ label: "Key Ideas", items: [{ name: "Evaluation Approaches", desc: "Aligning model evaluation with business KPIs, benchmarks, and AI-as-a-judge approaches" }] }] },
      { title: "Chapter 4: Sampling and Structured Outputs", description: "Decoding strategies, token sampling, and constraining model outputs.", subsections: [{ label: "Key Ideas", items: [{ name: "Output Control", desc: "Decoding strategies, token sampling, and constraining model outputs for reliability" }] }] },
      { title: "Chapter 5: Prompt Engineering", description: "Systematic approaches to prompt design and optimization.", subsections: [{ label: "Key Ideas", items: [{ name: "Prompt Design", desc: "Systematic approaches to prompt design, chain-of-thought, few-shot learning, and optimization" }] }] },
      { title: "Chapter 6: RAG and Agents", description: "Retrieval-augmented generation architectures and agentic workflows.", subsections: [{ label: "Key Ideas", items: [{ name: "RAG & Agentic Patterns", desc: "Retrieval-augmented generation architectures, agentic workflows, and tool-use patterns" }] }] },
      { title: "Chapter 7: Finetuning", description: "When and how to finetune foundation models.", subsections: [{ label: "Key Ideas", items: [{ name: "Model Adaptation", desc: "When and how to finetune foundation models using LoRA and other adaptation strategies" }] }] },
      { title: "Chapter 8: Dataset Engineering", description: "Data quality, curation, and synthetic data generation.", subsections: [{ label: "Key Ideas", items: [{ name: "Data Quality", desc: "Data quality, curation, deduplication, and synthetic data generation for AI applications" }] }] },
      { title: "Chapter 9: Inference Optimization", description: "Latency reduction, cost management, and serving at scale.", subsections: [{ label: "Key Ideas", items: [{ name: "Serving at Scale", desc: "Latency reduction, cost management, quantization, KV caching, and serving at scale" }] }] },
      { title: "Chapter 10: AI Engineering Architecture and User Feedback", description: "End-to-end system design and continuous improvement.", subsections: [{ label: "Key Ideas", items: [{ name: "System Architecture", desc: "End-to-end system design, monitoring, and continuous improvement loops" }] }] }
    ]
  }
];
