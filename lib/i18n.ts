export type Language = "en" | "zh";
export type PermissionKey =
  | "location"
  | "aiTraining"
  | "recommendationPersonalization"
  | "crossBorder"
  | "voiceInput"
  | "camera"
  | "purchaseHistory"
  | "searchHistory";

export interface PermissionDefinition {
  key: PermissionKey;
  slug: string;
  emoji: string;
  accent: string;
  glow: string;
}

export const permissionDefinitions = [
  { key: "location", slug: "location", emoji: "📍", accent: "#0ea5e9", glow: "rgba(14,165,233,0.18)" },
  { key: "aiTraining", slug: "ai-training", emoji: "🤖", accent: "#8b5cf6", glow: "rgba(139,92,246,0.16)" },
  { key: "recommendationPersonalization", slug: "personalization", emoji: "🧠", accent: "#6366f1", glow: "rgba(99,102,241,0.16)" },
  { key: "crossBorder", slug: "cross-border", emoji: "🌍", accent: "#06b6d4", glow: "rgba(6,182,212,0.18)" },
  { key: "voiceInput", slug: "voice-input", emoji: "🎤", accent: "#f43f5e", glow: "rgba(244,63,94,0.16)" },
  { key: "camera", slug: "camera-access", emoji: "📷", accent: "#f59e0b", glow: "rgba(245,158,11,0.2)" },
  { key: "purchaseHistory", slug: "purchase-history", emoji: "🛒", accent: "#14b8a6", glow: "rgba(20,184,166,0.18)" },
  { key: "searchHistory", slug: "search-history", emoji: "🔎", accent: "#475569", glow: "rgba(71,85,105,0.18)" }
] as const satisfies readonly PermissionDefinition[];

export const translations = {
  en: {
    hero: {
      eyebrow: "Interactive consent onboarding",
      title: "What Did I Actually Agree To?",
      intro: "Many apps ask for permissions. This journey helps you see how those permissions can shape what you see, what AI learns, and how platforms understand you.",
      note: "You do not need to decide immediately. Take one calm step at a time and understand what is really happening."
    },
    home: {
      beginButton: "Start with location",
      exploreButton: "Look closely",
      currentUnderstanding: "Current view",
      currentUnderstandingBody: "This is a quiet look at how these choices may shape the experience."
    },
    page: {
      backHome: "Back to start",
      exploreMore: "See another permission",
      finishJourney: "See what these choices may shape",
      tradeoffLabel: "What this choice may change",
      pauseNote: "One permission at a time",
      pauseBody: "Take a breath and notice how the experience may shift.",
      choiceHint: "Understanding this does not mean rejecting it. It is a way to notice what each choice may favor.",
      choiceSavedAllow: "You allowed this. It may make the experience smoother, but it can also help the system learn more from your behavior.",
      choiceSavedDeny: "You denied this. It may reduce adaptation, but some experiences may feel less tailored."
    },
    reflection: {
      eyebrow: "Current view",
      title: "What these choices may shape",
      body: "Some permissions make things easier. Some shape what appears next. Some help systems learn from how you use the product. Understanding them does not mean rejecting them. It simply gives the choice a little more context.",
      progressLabel: "Current view",
      profileTitle: "Current view",
      profileAdaptiveTitle: "More adaptive experience",
      profileAdaptiveBody: "You allowed systems to learn more from your behavior. This may improve personalization and future adaptation, while also giving the product a deeper sense of your habits.",
      profileIntentionalTitle: "More intentional sharing",
      profileIntentionalBody: "You limited several permissions. This may reduce adaptation and AI learning, while making some experiences feel less tailored.",
      profileBalancedTitle: "Balanced choices",
      profileBalancedBody: "You allowed some systems to adapt while limiting others. Your choices lean toward a balance between convenience and control.",
      profileEmptyTitle: "Gentle starting point",
      profileEmptyBody: "You have not chosen any permissions yet. You can return anytime and compare how each choice may shape the experience.",
      profileNote: "This is not a score. It is a quiet view of what your choices currently favor.",
      insightTitle: "What this journey made easy to notice",
      insights: [
        "Some permissions improve convenience.",
        "Some permissions shape recommendations.",
        "Some permissions help systems learn about patterns in your behavior."
      ],
      restartButton: "Start again",
      homeButton: "Back to start"
    },
    permissionThemes: {
      location: { title: "Permission" },
      aiTraining: { title: "Permission" },
      recommendationPersonalization: { title: "Permission" },
      crossBorder: { title: "Permission" },
      voiceInput: { title: "Permission" },
      camera: { title: "Permission" },
      purchaseHistory: { title: "Permission" },
      searchHistory: { title: "Permission" }
    },
    permissionCards: {
      location: { title: "Location", summary: "Your location can shape nearby services, local ads, and what the platform thinks is relevant in your area." },
      aiTraining: { title: "How AI May Learn From Your Interactions", summary: "Your prompts, edits, and feedback may be used to improve future AI responses and how the system behaves for other people." },
      recommendationPersonalization: { title: "Personalization", summary: "Clicks, scrolls, and time spent can change what appears next, including recommendations and ads. A longer stay does not always mean true preference, but the system may still keep treating similar content as a strong signal." },
      crossBorder: { title: "Data Across Regions", summary: "Some data may be processed on servers in other countries, where privacy rules and controls can differ." },
      voiceInput: { title: "Voice Input", summary: "Voice audio can be turned into text and also analyzed for speech patterns, language habits, and recognition quality." },
      camera: { title: "Camera Access", summary: "Photos or video may be used to detect scenes, objects, or faces for recognition, suggestions, or content understanding." },
      purchaseHistory: { title: "Purchase History", summary: "Past purchases can influence offers, ads, and how the platform infers your interests and spending habits." },
      searchHistory: { title: "Search History", summary: "Search records can affect search rankings, ad relevance, and what the platform thinks you may want next." }
    },
    permissions: {
      location: {
        title: "Location",
        screen1: "Your location can tell the app where you are right now.",
        screen2: "That may change nearby services, local ads, and what feels relevant in your area.",
        screen3: "The platform may also use your location to infer your routine, neighborhood, and common travel patterns.",
        screen4: "Before you decide, notice the tradeoff: convenience and local relevance may improve, and your location may also inform how the platform understands your day-to-day context.",
        tradeoffAllow: "If you allow it, local features may feel smoother and more relevant.",
        tradeoffDeny: "If you deny it, nearby services and location-based suggestions may feel less tailored.",
        inference: "This permission can also shape how the platform infers your routine and where you are likely to be.",
        allowOutcome: "What you gain",
        denyOutcome: "What you may give up",
        allow: "Allow",
        deny: "Deny",
        whyCTA: "See the tradeoff",
        impactCTA: "What this may shape",
        continueCTA: "Keep going"
      },
      aiTraining: {
        title: "How AI May Learn From Your Interactions",
        screen1: "Your prompts, edits, and feedback may be used to improve future AI responses.",
        screen2: "The system may learn patterns from how you ask questions and how you correct results.",
        screen3: "That can improve future responses, but it also means your behavior may help shape how the product responds to other people.",
        screen4: "Before you decide, notice the tradeoff: your interactions may improve future answers, but they also become part of how the system learns and calibrates.",
        tradeoffAllow: "If you allow it, future responses may improve faster, but your behavior contributes to model learning.",
        tradeoffDeny: "If you deny it, future improvements may come more slowly, and personalization may be less responsive.",
        inference: "This permission is not only about your own experience; it can also influence how the system learns from patterns in many users' behavior.",
        allowOutcome: "What you gain",
        denyOutcome: "What you may give up",
        allow: "Allow",
        deny: "Deny",
        whyCTA: "See the tradeoff",
        impactCTA: "What this may shape",
        continueCTA: "Keep going"
      },
      recommendationPersonalization: {
        title: "Personalization",
        screen1: "Your clicks, scrolls, and time spent can be used to decide what you see next.",
        screen2: "The platform may keep showing similar posts, products, or content to keep you engaged.",
        screen3: "A longer stay does not always mean you truly prefer the content, but the system may still treat it as a strong signal and keep reinforcing similar recommendations.",
        screen4: "Before you decide, notice the tradeoff: you may get a more tailored feed, but the platform may also shape your future choices by narrowing what appears next.",
        tradeoffAllow: "If you allow it, the feed may feel more tailored, but the system may shape future recommendations more strongly.",
        tradeoffDeny: "If you deny it, recommendations may feel broader and less tailored, but the system has less signal to shape your feed.",
        inference: "This permission helps the platform infer what kind of content is likely to keep your attention.",
        allowOutcome: "What you gain",
        denyOutcome: "What you may give up",
        allow: "Allow",
        deny: "Deny",
        whyCTA: "See the tradeoff",
        impactCTA: "What this may shape",
        continueCTA: "Keep going"
      },
      crossBorder: {
        title: "Data Across Regions",
        screen1: "Some of your data may be processed on servers outside your home country.",
        screen2: "That can change which privacy rules and retention practices apply.",
        screen3: "Different regions may have different safeguards and data handling practices, even when the service looks the same.",
        screen4: "Before you decide, notice the tradeoff: global infrastructure may support the product, but your data may also be handled under different regional rules.",
        tradeoffAllow: "If you allow it, the service may operate more smoothly across regions, but data may be processed in multiple jurisdictions.",
        tradeoffDeny: "If you deny it, some cross-region processing may stop, but some regional features may become more limited.",
        inference: "This permission is also about where your data is handled, not only whether it is collected.",
        allowOutcome: "What you gain",
        denyOutcome: "What you may give up",
        allow: "Allow",
        deny: "Deny",
        whyCTA: "See the tradeoff",
        impactCTA: "What this may shape",
        continueCTA: "Keep going"
      },
      voiceInput: {
        title: "Voice Input",
        screen1: "Voice input can be turned into text.",
        screen2: "It may also be analyzed for speech patterns, tone, and language habits.",
        screen3: "That can improve recognition quality, but it also means the system may learn more about how you speak, not only what you say.",
        screen4: "Before you decide, notice the tradeoff: voice features may become easier to use, but your speech patterns may also become part of the system's understanding of you.",
        tradeoffAllow: "If you allow it, voice features may become smoother, but your speech patterns may be used for recognition and personalization.",
        tradeoffDeny: "If you deny it, voice features may become less convenient, and some recognition-related improvements may slow down.",
        inference: "This permission can shape how the platform infers your speech habits and language patterns.",
        allowOutcome: "What you gain",
        denyOutcome: "What you may give up",
        allow: "Allow",
        deny: "Deny",
        whyCTA: "See the tradeoff",
        impactCTA: "What this may shape",
        continueCTA: "Keep going"
      },
      camera: {
        title: "Camera Access",
        screen1: "Photos or video may be used to detect objects, scenes, or faces.",
        screen2: "That can affect image recognition, content suggestions, and later recommendations.",
        screen3: "The app may rely on that data to understand what you are seeing, but it may also infer context such as location, objects, or moments.",
        screen4: "Before you decide, notice the tradeoff: camera features may become more capable, but the system may also build a richer picture of what you are seeing and doing.",
        tradeoffAllow: "If you allow it, visual features may work better, but image data may also contribute to richer inference.",
        tradeoffDeny: "If you deny it, those features may be less capable, and some visual suggestions may be unavailable.",
        inference: "This permission can help the platform infer scenes, objects, and context from what you capture.",
        allowOutcome: "What you gain",
        denyOutcome: "What you may give up",
        allow: "Allow",
        deny: "Deny",
        whyCTA: "See the tradeoff",
        impactCTA: "What this may shape",
        continueCTA: "Keep going"
      },
      purchaseHistory: {
        title: "Purchase History",
        screen1: "What you buy can become part of the platform's understanding of your interests.",
        screen2: "That may influence offers, ads, and product suggestions.",
        screen3: "The platform may also infer spending habits, recurring needs, and what kinds of products are likely to matter to you.",
        screen4: "Before you decide, notice the tradeoff: purchase history may improve relevance, but it also helps the platform infer more about your habits and priorities.",
        tradeoffAllow: "If you allow it, offers and suggestions may become more relevant, but the platform may infer more about your spending habits.",
        tradeoffDeny: "If you deny it, some recommendations and offers may be less tailored, and less context may be available for future suggestions.",
        inference: "This permission can help the platform infer your likely interests, routines, and buying patterns.",
        allowOutcome: "What you gain",
        denyOutcome: "What you may give up",
        allow: "Allow",
        deny: "Deny",
        whyCTA: "See the tradeoff",
        impactCTA: "What this may shape",
        continueCTA: "Keep going"
      },
      searchHistory: {
        title: "Search History",
        screen1: "Your searches can be used to infer topics and interests.",
        screen2: "That may affect search rankings, ad relevance, and suggested content.",
        screen3: "The platform may use that history to decide what it thinks you want next, even when the content is not obviously tied to your current goal.",
        screen4: "Before you decide, notice the tradeoff: search history may improve relevance, but it can also help the platform build a stronger picture of what you are interested in.",
        tradeoffAllow: "If you allow it, search results and suggestions may feel more personalized, but the platform may build a richer profile of your interests.",
        tradeoffDeny: "If you deny it, future search and recommendation quality may feel less tailored, and some signals will be missing.",
        inference: "This permission can help the platform infer what you are likely to want next, even before you search again.",
        allowOutcome: "What you gain",
        denyOutcome: "What you may give up",
        allow: "Allow",
        deny: "Deny",
        whyCTA: "See the tradeoff",
        impactCTA: "What this may shape",
        continueCTA: "Keep going"
      }
    }
  },
  zh: {
    hero: {
      eyebrow: "交互式同意引导",
      title: "我到底同意了什么？",
      intro: "很多应用都会请求权限。这个引导会帮你了解：这些权限可能如何影响内容展示、AI 学习，以及平台对你的理解。",
      note: "你不需要马上决定。可以先看看这些选择可能带来哪些便利、适配和后续影响。"
    },
    home: {
      beginButton: "从位置开始",
      exploreButton: "继续看这个权限",
      currentUnderstanding: "当前概览",
      currentUnderstandingBody: "看看这些选择会如何逐渐影响你的体验。"
    },
    page: {
      backHome: "回到起点",
      exploreMore: "看另一个权限",
      finishJourney: "查看当前选择",
      tradeoffLabel: "可能的变化",
      pauseNote: "一次只看一个权限",
      pauseBody: "先看看这个权限可能如何改变后续体验。",
      choiceHint: "了解这些影响后，你可以按自己的需要选择开启或关闭。",
      choiceSavedAllow: "已允许。体验可能更顺滑，系统也会获得更多可用于适配的信号。",
      choiceSavedDeny: "已关闭。数据使用会更少，部分体验可能不那么贴近你。"
    },
    reflection: {
      eyebrow: "当前概览",
      title: "这些选择可能带来的变化",
      body: "有些权限会让功能更顺手，有些会影响你接下来看到的内容，也有些会帮助系统根据使用方式做出调整。先了解这些变化，再决定是否开启。",
      progressLabel: "当前概览",
      profileTitle: "当前概览",
      profileAdaptiveTitle: "更偏向适配",
      profileAdaptiveBody: "你开启了较多适配相关权限。个性化和后续推荐可能更准确，平台也会获得更多关于使用习惯的信号。",
      profileIntentionalTitle: "更偏向克制",
      profileIntentionalBody: "你关闭了几项权限。系统可用于适配和 AI 学习的信号会更少，一些体验可能不那么贴近你。",
      profileBalancedTitle: "保持平衡",
      profileBalancedBody: "你开启了一部分适配，也关闭了一部分数据使用。整体更接近便利与控制之间的平衡。",
      profileEmptyTitle: "还未开始",
      profileEmptyBody: "你还没有做出任何权限选择。你可以随时回到这里，看看每个选择可能会怎样影响体验。",
      profileNote: "这不是评分，只是根据当前选择生成的体验概览。",
      insightTitle: "你刚刚看到的重点",
      insights: [
        "有些权限会带来便利。",
        "有些权限会影响推荐内容。",
        "有些权限会帮助系统学习你的行为模式。"
      ],
      restartButton: "重新开始",
      homeButton: "回到起点"
    },
    permissionThemes: {
      location: { title: "权限" },
      aiTraining: { title: "权限" },
      recommendationPersonalization: { title: "权限" },
      crossBorder: { title: "权限" },
      voiceInput: { title: "权限" },
      camera: { title: "权限" },
      purchaseHistory: { title: "权限" },
      searchHistory: { title: "权限" }
    },
    permissionCards: {
      location: { title: "位置信息", summary: "你的位置可能会影响附近服务、当地广告，以及平台判断你所在地区的方式。" },
      aiTraining: { title: "AI 如何使用你的互动", summary: "你的提问、修改和反馈，可能会被用于改进未来的 AI 回答，也可能影响系统后续的响应方式。" },
      recommendationPersonalization: { title: "个性化推荐", summary: "你的点击、停留和浏览习惯，可能会改变你下一次看到的内容，也会影响推荐与广告。" },
      crossBorder: { title: "跨区域数据处理", summary: "部分数据可能会被传输到其他国家或地区的服务器处理，不同地区的数据规则也可能不完全相同。" },
      voiceInput: { title: "语音输入", summary: "语音不仅会被转成文字，还可能被分析为语气、语言习惯和识别模式，影响后续的识别与推荐。" },
      camera: { title: "摄像头访问", summary: "照片或视频可能会被用于识别场景、物品或人物，进而影响推荐、识别结果和内容理解。" },
      purchaseHistory: { title: "消费记录", summary: "你的购买记录可能会影响优惠、广告，以及平台对你消费习惯的判断。" },
      searchHistory: { title: "搜索记录", summary: "你的搜索记录可能会影响搜索排序、广告相关性，以及系统认为你接下来可能感兴趣的内容。" }
    },
    permissions: {
      location: {
        title: "位置信息",
        screen1: "你的位置可以告诉应用你现在在哪。",
        screen2: "这可能会影响附近服务、当地广告，以及平台对你地区的判断。",
        screen3: "平台也可能会根据它推断你的日常路线、居住区域以及常见出行模式。",
        screen4: "决定前，可以先看看这个变化：它能带来更贴近当前位置的服务，也会让平台获得更多日常活动相关信号。",
        tradeoffAllow: "开启后，本地功能和相关服务可能更顺滑，内容也更贴近当前地点。",
        tradeoffDeny: "关闭后，附近服务和基于位置的建议可能不那么贴近。",
        inference: "这个权限不仅是“位置数据”，也会影响平台如何推断你的日常规律和可能的出行范围。",
        allowOutcome: "开启后",
        denyOutcome: "关闭后",
        allow: "开启",
        deny: "关闭",
        whyCTA: "查看变化",
        impactCTA: "会影响什么",
        continueCTA: "继续看"
      },
      aiTraining: {
        title: "AI 如何使用你的互动",
        screen1: "你的提问、修改和反馈，可能会被用于改进未来的 AI 回答。",
        screen2: "系统可能会从你的互动方式里学习，判断哪些回答更合适。",
        screen3: "这可能改善你之后的体验，也可能帮助系统从更多用户互动中学习。",
        screen4: "决定前，可以先看看这个变化：未来回答可能更好，你的互动也可能成为系统学习的一部分。",
        tradeoffAllow: "开启后，未来回答可能更快、更贴近你的偏好，你的互动也会参与模型学习。",
        tradeoffDeny: "关闭后，未来改进可能更慢，个性化也可能不那么贴近。",
        inference: "这个权限不仅关乎你自己的体验，也会影响系统如何从人群里的行为模式中学习。",
        allowOutcome: "开启后",
        denyOutcome: "关闭后",
        allow: "开启",
        deny: "关闭",
        whyCTA: "查看变化",
        impactCTA: "会影响什么",
        continueCTA: "继续看"
      },
      recommendationPersonalization: {
        title: "个性化推荐",
        screen1: "你的点击、停留和浏览习惯，可能会被用来决定你下一次看到什么。",
        screen2: "平台可能会持续给你更相似的内容、商品或信息。",
        screen3: "你停留得更久，并不一定代表你真正更喜欢它，但系统仍可能把它当成强信号继续强化相似推荐。",
        screen4: "决定前，可以先看看这个变化：内容可能更贴近你，平台也会更主动地调整你接下来看到的内容。",
        tradeoffAllow: "开启后，推荐可能更贴近你，系统也会更依赖你的行为来调整未来内容。",
        tradeoffDeny: "关闭后，推荐范围可能更宽，但贴合度也可能下降。",
        inference: "这个权限会帮助平台推断：什么内容更可能吸引你，什么内容更值得继续给你看。",
        allowOutcome: "开启后",
        denyOutcome: "关闭后",
        allow: "开启",
        deny: "关闭",
        whyCTA: "查看变化",
        impactCTA: "会影响什么",
        continueCTA: "继续看"
      },
      crossBorder: {
        title: "跨区域数据处理",
        screen1: "部分数据可能会被传输到你所在国家之外的服务器。",
        screen2: "这会让不同地区的隐私规则、保存方式和处理流程有差异。",
        screen3: "即使服务外观相同，不同地区也可能遵循不同的合规方式。",
        screen4: "决定前，可以先看看这个变化：跨区域基础设施可能让服务更稳定，数据也可能在多个地区被处理。",
        tradeoffAllow: "开启后，服务跨地区运行可能更顺畅，数据也可能在多个地区被处理。",
        tradeoffDeny: "关闭后，部分跨区域处理会减少，某些地区相关功能可能受限。",
        inference: "这个权限不仅关乎是否收集数据，也关乎你的数据被放在什么地方处理。",
        allowOutcome: "开启后",
        denyOutcome: "关闭后",
        allow: "开启",
        deny: "关闭",
        whyCTA: "查看变化",
        impactCTA: "会影响什么",
        continueCTA: "继续看"
      },
      voiceInput: {
        title: "语音输入",
        screen1: "语音输入可以被转换成文字。",
        screen2: "它也可能会被分析为语气、语言习惯和常用表达。",
        screen3: "这有助于提升识别效果，也可能让系统了解你的说话方式，而不只是你说了什么。",
        screen4: "决定前，可以先看看这个变化：语音功能可能更顺手，你的语音模式也可能用于后续识别和适配。",
        tradeoffAllow: "开启后，语音功能可能更顺滑，语音模式也可能用于识别和个性化。",
        tradeoffDeny: "关闭后，语音功能可能不那么方便，相关识别改进也可能更慢。",
        inference: "这个权限会影响平台如何推断你的语音习惯、语言风格和常用表达。",
        allowOutcome: "开启后",
        denyOutcome: "关闭后",
        allow: "开启",
        deny: "关闭",
        whyCTA: "查看变化",
        impactCTA: "会影响什么",
        continueCTA: "继续看"
      },
      camera: {
        title: "摄像头访问",
        screen1: "照片或视频可能会被用于识别场景、物品或人物。",
        screen2: "这会影响图片识别、内容建议，以及之后的推荐结果。",
        screen3: "应用可能会基于这些信息来理解你看到的内容，也可能推断场景、物体或当时的上下文。",
        screen4: "决定前，可以先看看这个变化：相机功能可能更完整，系统也可能获得更多画面和场景相关信息。",
        tradeoffAllow: "开启后，视觉功能可能更完整，图片数据也可能带来更多场景推断。",
        tradeoffDeny: "关闭后，视觉功能可能受限，一些图片相关建议也可能无法使用。",
        inference: "这个权限会帮助平台推断你拍到的场景、物品和上下文。",
        allowOutcome: "开启后",
        denyOutcome: "关闭后",
        allow: "开启",
        deny: "关闭",
        whyCTA: "查看变化",
        impactCTA: "会影响什么",
        continueCTA: "继续看"
      },
      purchaseHistory: {
        title: "消费记录",
        screen1: "你买过的东西，可能会成为平台理解你兴趣的一部分。",
        screen2: "这可能会影响优惠、广告和商品推荐。",
        screen3: "平台也可能会据此推断你的消费习惯、常见需求以及更可能关注的产品类型。",
        screen4: "决定前，可以先看看这个变化：推荐和优惠可能更相关，平台也会获得更多关于消费偏好的信号。",
        tradeoffAllow: "开启后，优惠和推荐可能更相关，平台也会获得更多消费偏好相关信号。",
        tradeoffDeny: "关闭后，部分推荐和优惠可能不那么贴近，未来建议可用的上下文也会减少。",
        inference: "这个权限会帮助平台推断你的可能兴趣、常见需求和购买模式。",
        allowOutcome: "开启后",
        denyOutcome: "关闭后",
        allow: "开启",
        deny: "关闭",
        whyCTA: "查看变化",
        impactCTA: "会影响什么",
        continueCTA: "继续看"
      },
      searchHistory: {
        title: "搜索记录",
        screen1: "你的搜索记录可能会被用来推断你的兴趣。",
        screen2: "这会影响搜索排序、广告相关性，以及系统认为你接下来可能想要什么。",
        screen3: "平台可能会把这些历史视为下一步内容的依据，即使它和你当前目标不完全直接相关。",
        screen4: "决定前，可以先看看这个变化：搜索结果可能更相关，平台也会获得更多关于兴趣变化的信号。",
        tradeoffAllow: "开启后，搜索结果和推荐可能更贴近你，平台也会获得更多兴趣相关信号。",
        tradeoffDeny: "关闭后，未来的搜索和推荐可能不那么贴近，系统可用的信号也会减少。",
        inference: "这个权限会帮助平台推断你下一步可能会想要什么，即使你还没开始新的搜索。",
        allowOutcome: "开启后",
        denyOutcome: "关闭后",
        allow: "开启",
        deny: "关闭",
        whyCTA: "查看变化",
        impactCTA: "会影响什么",
        continueCTA: "继续看"
      }
    }
  }
} as const;

export function getTranslations(language: Language) {
  return translations[language];
}
