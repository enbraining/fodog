---
title: C++ stable_sort
pubDate: 2024-06-15

tags:
  - cpp
category: 알고리즘
---

다음 코드에서 주석 처리되어있는 부분이 기존에 사용했던 코드로 오답이 나왔었다. 하지만 sort 함수는 동일한 값의 순서를 보장하지 않기 때문에 \`{2, Hoxy}, {1, Hello}, {1, What}, {1, Hmm}\` 라는 데이터들이 들어왔을 때 Pair.first를 기준으로 정렬을 하긴 하지만 같은 first 값을 가진 데이터의 순서가 바뀔수 있다는 문제가 있었다. 하지만 stable_sort 함수를 사용한다면 동일한 값의 순서를 보장할 수 있다!

```cpp
#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;vector<pair<int, string>> n_pairs;bool isBig(const std::pair<int, std::string> &a, const std::pair<int, std::string> &b) {
if(b.first > a.first) return true;
return false;
}int main() {
ios_base::sync_with_stdio(false);
cin.tie(nullptr);
cout.tie(nullptr);int N;
cin &gt;&gt; N;

for(int i = 0; i &lt; N; i++) {
    std::pair&lt;int, std::string&gt; pair;
    std::cin &gt;&gt; pair.first &gt;&gt; pair.second;
    n_pairs.push_back(pair);
}

// sort(n_pairs.begin(), n_pairs.end(), isBig);
stable_sort(n_pairs.begin(), n_pairs.end(), isBig);

for (const auto&amp; [fst, snd] : n_pairs) {
    std::cout &lt;&lt; fst &lt;&lt; ' ' &lt;&lt; snd &lt;&lt; '\n';
}}
```
