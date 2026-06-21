import React from 'react'

const Profilejs = () => {
  return (
    <>
      <pre style={{ margin: 0, fontFamily: 'Consolas', color: '#f8f8f2' }}>
        <code>
          <span className="token-keyword">const</span> <span className="token-variable">profile</span> <span className="token-operator">=</span> <span className="token-punctuation">{"{"}</span>
          {"\n"}      <span className="token-property">name</span><span className="token-operator">:</span> <span className="token-string">'Atik Hasan Anik'</span><span className="token-punctuation">,</span>
          {"\n"}      <span className="token-property">title</span><span className="token-operator">:</span> <span className="token-string">'Backend & Full-Stack Developer | Problem Solver | One Man Army'</span><span className="token-punctuation">,</span>
          {"\n"}      <span className="token-property">skills</span><span className="token-operator">:</span> <span className="token-punctuation">[</span>
          {"\n"}          <span className="token-string">'React'</span><span className="token-punctuation">,</span> <span className="token-string">'NextJS'</span><span className="token-punctuation">,</span> <span className="token-string">'NodeJs'</span><span className="token-punctuation">,</span> <span className="token-string">'Express'</span><span className="token-punctuation">,</span> <span className="token-string">'NestJs'</span><span className="token-punctuation">,</span> 
          {"\n"}          <span className="token-string">'PostgreSQL'</span><span className="token-punctuation">,</span> <span className="token-string">'Supabase'</span><span className="token-punctuation">,</span> <span className="token-string">'MongoDB'</span><span className="token-punctuation">,</span> <span className="token-string">'Docker'</span><span className="token-punctuation">,</span> <span className="token-string">'AI Integration'</span>
          {"\n"}          <span className="token-string">'JavaScript'</span><span className="token-punctuation">,</span> <span className="token-string">'TypeScript'</span><span className="token-punctuation">,</span> <span className="token-string">'Git'</span><span className="token-punctuation">,</span> <span className="token-string">'Linux'</span><span className="token-punctuation">,</span> <span className="token-string">'Tailwind'</span>
          {"\n"}      <span className="token-punctuation">]</span><span className="token-punctuation">,</span>
          {"\n"}      <span className="token-property">hardWorker</span><span className="token-operator">:</span> <span className="token-boolean">true</span><span className="token-punctuation">,</span>
          {"\n"}      <span className="token-property">quickLearner</span><span className="token-operator">:</span> <span className="token-boolean">true</span><span className="token-punctuation">,</span>
          {"\n"}      <span className="token-property">problemSolver</span><span className="token-operator">:</span> <span className="token-boolean">true</span><span className="token-punctuation">,</span>
          {"\n"}      <span className="token-property">teamPlayer</span><span className="token-operator">:</span> <span className="token-boolean">true</span><span className="token-punctuation">,</span>
          {"\n"}      <span className="token-function">hireable</span><span className="token-operator">:</span> <span className="token-keyword">function</span><span className="token-punctuation">()</span> <span className="token-punctuation">{"{"}</span>
          {"\n"}          <span className="token-keyword">return</span> <span className="token-punctuation">(</span>
          {"\n"}              <span className="token-keyword">this</span><span className="token-operator">.</span><span>hardWorker</span> <span className="token-operator">{"&&"}</span>
          {"\n"}              <span className="token-keyword">this</span><span className="token-operator">.</span><span>quickLearner</span> <span className="token-operator">{"&&"}</span>
          {"\n"}              <span className="token-keyword">this</span><span className="token-operator">.</span><span>problemSolver</span> <span className="token-operator">{"&&"}</span>
          {"\n"}              <span className="token-keyword">this</span><span className="token-operator">.</span><span>teamPlayer</span> <span className="token-operator">{"&&"}</span>
          {"\n"}              <span className="token-keyword">this</span><span className="token-operator">.</span><span>skills</span><span className="token-operator">.</span><span >length</span> <span className="token-operator">{">="}</span> <span className="token-number">5</span>
          {"\n"}          <span className="token-punctuation">)</span><span className="token-punctuation">;</span>
          {"\n"}      <span className="token-punctuation">{"}"}</span>
          {"\n"}  <span className="token-punctuation">{"}"}</span><span className="token-punctuation">;</span>
        </code>
      </pre>
    </>
  )
}

export default Profilejs
