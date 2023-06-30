const e=JSON.parse('{"key":"v-431c4b0e","path":"/sql/es/7.%E4%BC%98%E5%8C%96/7-1.%E5%9F%BA%E6%9C%AC%E4%BC%98%E5%8C%96.html","title":"7-1. 基本优化","lang":"zh-CN","frontmatter":{"title":"7-1. 基本优化","date":"2023-06-30T00:00:00.000Z","description":"硬件 1. 硬盘 Elasticsearch 的基础是 Lucene，所有的索引和文档数据是存储在本地的磁盘中。 因此磁盘性能是ES最大瓶颈（也计划是所有类型服务器的瓶颈）。Elasticsearch 重度使用磁盘，磁盘能处理的吞吐量越大，节点就越稳定。 一些优化磁盘 I/O 的技巧： 使用 SSD：IO效率是机械盘的10倍以上; 使用RAID 0：可...","head":[["meta",{"property":"og:url","content":"https://aicell.cc/java-doc/sql/es/7.%E4%BC%98%E5%8C%96/7-1.%E5%9F%BA%E6%9C%AC%E4%BC%98%E5%8C%96.html"}],["meta",{"property":"og:site_name","content":"Java全栈"}],["meta",{"property":"og:title","content":"7-1. 基本优化"}],["meta",{"property":"og:description","content":"硬件 1. 硬盘 Elasticsearch 的基础是 Lucene，所有的索引和文档数据是存储在本地的磁盘中。 因此磁盘性能是ES最大瓶颈（也计划是所有类型服务器的瓶颈）。Elasticsearch 重度使用磁盘，磁盘能处理的吞吐量越大，节点就越稳定。 一些优化磁盘 I/O 的技巧： 使用 SSD：IO效率是机械盘的10倍以上; 使用RAID 0：可..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-30T10:19:04.000Z"}],["meta",{"property":"article:author","content":"Victor Da V"}],["meta",{"property":"article:published_time","content":"2023-06-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-30T10:19:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7-1. 基本优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-30T10:19:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Victor Da V\\",\\"url\\":\\"https://aicell.cc/about\\"}]}"]]},"headers":[{"level":2,"title":"硬件","slug":"硬件","link":"#硬件","children":[]},{"level":2,"title":"分片策略","slug":"分片策略","link":"#分片策略","children":[]},{"level":2,"title":"查询优化","slug":"查询优化","link":"#查询优化","children":[]},{"level":2,"title":"写入优化","slug":"写入优化","link":"#写入优化","children":[]}],"git":{"createdTime":1688120344000,"updatedTime":1688120344000,"contributors":[{"name":"Aaron","email":"Aaron@gmail.com","commits":1}]},"readingTime":{"minutes":8.29,"words":2487},"filePathRelative":"sql/es/7.优化/7-1.基本优化.md","localizedDate":"2023年6月30日","excerpt":"","autoDesc":true}');export{e as data};
