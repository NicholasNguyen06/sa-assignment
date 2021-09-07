# Algolia Solution Architecture Assignment

##### [Live Demo](https://nicholasnguyen06.github.io/sa-assignment/ "Live Demo") 

**Question 1: Hello,**

Im new to search engines, and there are a lot of concepts Im not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records Indexing I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

**Question 1 Answer:**

Hey George,

Hope you're having a great week so far, below I've attached definitons of each concept, as well as links to our internal documentation that go a little more in depth. 
- [Records](https://www.algolia.com/doc/faq/basics/what-is-a-record/ "Records") - A record is an object you add to an index and want to search for. In short, it is a piece of data, whether a product, documentation, or other searchable thing you want your users to be able to find. 
- [Index/Indexing](https://www.algolia.com/doc/api-client/methods/indexing/ "Index/Indexing")  - An index is the place where the data used by a search engine is stored, and indexing would be manipulating (adding, deletings, updating) said data into these indexes. 
- [Custom Ranking](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/#custom-ranking/ "Custom Ranking") - We have our standard rankings that include geo-location, proximity, typos, etc., but custom rankings add in new properties to suggest in an order. In the JSON payload for the data, you can include any attributes you would like, such as number of words, popularity scoring, dates, and more. These will help filter results to users to data that is even more relevant to their search.

Feel free to reach out to me if you have more questions, and I am more than happy enough to jump on a quick call and give you a quick overview.

Cheers, Nick



------------



**Question 2: Hello,**

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

**Questions 2 Answer**

Hey Matt,

Any feedback is good feedback, no need to apologize. I am sorry that the new user experience has not been treating you well. I can take this back into our product team and see what they think, or see if we have other customers experiencing the same issue, and their workaround/feedback they have sent in. Thank you for bringing this to our attention.

Cheers, Nick



------------



**Question 3: Hi,**

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

**Question 3 Answer:**

Hey Leo,

We have many out of the box integrations in our documentation that should allow you to be all set up quite fast. It will not take you too much development work to get a simple search menu working, I think a good place to start would be in our [Getting Started](https://www.algolia.com/doc/ui-libraries/autocomplete/introduction/getting-started/ "Getting Started") documentation. As for a high level process, you would need to first import your formatted JSON data into Algolia. After your data is imported, a basic implementation would be a few snippets of JS code that tie into a front end component that will render the results you imported into Algolia. If you need any specific details on implementation when you start, feel free to email me and we can go over it together.

Cheers, Nick
