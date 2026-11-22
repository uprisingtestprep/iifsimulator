const QUESTIONS = [
  {
    "id": 1,
    "chapter": 1,
    "domain": "foundations",
    "question": "A patient has a positive wound culture but no redness, drainage, fever, or pain. Which statement best describes the situation?",
    "options": {
      "A": "The culture may show colonization rather than infection without compatible findings",
      "B": "The presence of an organism always proves that invasive infection is present under the conditions described",
      "C": "A positive culture makes antibiotic treatment mandatory regardless of symptoms under the conditions described",
      "D": "The result can be ignored because cultures never identify harmful organisms under the conditions described"
    },
    "answer": "A",
    "explanation": "Colonization means organisms are present without tissue invasion or symptoms. Infection means the organisms are multiplying in tissue or a normally sterile site. A culture result must be interpreted with the site, specimen quality, and clinical findings."
  },
  {
    "id": 2,
    "chapter": 1,
    "domain": "foundations",
    "question": "A patient develops fever, chills, and hypotension after bacteria enter the bloodstream. Which process most directly explains the fever?",
    "options": {
      "A": "Bacterial toxins directly raise the hypothalamic temperature set point under the conditions described",
      "B": "Inflammatory cytokines act on the hypothalamus to change temperature regulation",
      "C": "Antibody binding to host cells releases stored histamine immediately under the conditions described",
      "D": "The spleen increases red-cell production in response to circulating bacteria under the conditions described"
    },
    "answer": "B",
    "explanation": "IL-1, TNF, IL-6, and prostaglandin E2 act on the hypothalamus and raise the temperature set point. Fever is therefore part of the host response. Some toxins can trigger that response indirectly through immune signaling."
  },
  {
    "id": 3,
    "chapter": 1,
    "domain": "foundations",
    "question": "A patient receives a medicine that blocks IL-6 signaling and later develops pneumonia without a high CRP. Which explanation is most likely?",
    "options": {
      "A": "The medicine removes the liver signal that produces CRP during inflammation",
      "B": "The medicine kills alveolar macrophages before they can release CRP",
      "C": "The medicine prevents all bacteria from activating complement proteins",
      "D": "The medicine directly destroys white blood cells within infected lung tissue"
    },
    "answer": "A",
    "explanation": "IL-6 is a major driver of hepatic CRP production. Blocking its receptor can remove an important laboratory warning sign. The patient can still have serious infection even when CRP is low."
  },
  {
    "id": 4,
    "chapter": 1,
    "domain": "foundations",
    "question": "Which term describes the time between exposure to an infectious organism and the first appearance of symptoms?",
    "options": {
      "A": "The incubation period is the silent interval before clinical illness begins",
      "B": "The prodrome is the entire period during which a person remains infectious",
      "C": "The attack rate is the time required for the immune system to clear infection",
      "D": "The prevalence period is the interval between two consecutive exposures"
    },
    "answer": "A",
    "explanation": "Incubation is the interval from exposure to symptom onset. The prodrome is the early period of nonspecific symptoms. Attack rate and prevalence describe population patterns rather than an individual's incubation."
  },
  {
    "id": 5,
    "chapter": 1,
    "domain": "foundations",
    "question": "Which property most clearly distinguishes adaptive immunity from innate immunity?",
    "options": {
      "A": "Adaptive immunity uses only physical barriers to prevent microbial entry",
      "B": "Adaptive immunity recognizes broad patterns through inherited receptors",
      "C": "Adaptive immunity uses selected receptors and can produce durable memory",
      "D": "Adaptive immunity responds within seconds without requiring cell division"
    },
    "answer": "C",
    "explanation": "Adaptive lymphocytes use rearranged receptors, undergo clonal selection, and form memory. Innate immunity is faster and uses germline-encoded recognition. The two systems cooperate rather than operating independently."
  },
  {
    "id": 6,
    "chapter": 1,
    "domain": "foundations",
    "question": "A patient with severe burns develops an infection with a common skin organism. Which defense was most directly lost?",
    "options": {
      "A": "The ability of B cells to rearrange immunoglobulin gene segments under the conditions described",
      "B": "The complement proteins made continuously by the liver under the conditions described",
      "C": "The thymic selection process that removes self-reactive T cells under the conditions described",
      "D": "The physical skin barrier that normally limits microbial entry into tissue"
    },
    "answer": "D",
    "explanation": "Burns destroy the epidermal barrier and expose tissue to environmental and colonizing organisms. B-cell, complement, and thymic functions are not directly removed by a burn, although severe injury can later alter immune function."
  },
  {
    "id": 7,
    "chapter": 1,
    "domain": "foundations",
    "question": "Which description best matches an opportunistic infection?",
    "options": {
      "A": "An infection that takes advantage of a specific defect in host defense",
      "B": "An infection caused only by bacteria that possess capsules and pili under the conditions described",
      "C": "An infection that spreads only through contaminated food and water under the conditions described",
      "D": "An infection that always occurs immediately after a person is exposed under the conditions described"
    },
    "answer": "A",
    "explanation": "Opportunistic organisms cause disease more readily when a defense is missing. The infection pattern often points to the defect. Pneumocystis after T-cell suppression is a classic example."
  },
  {
    "id": 8,
    "chapter": 1,
    "domain": "foundations",
    "question": "Why can a respiratory virus increase the risk of bacterial pneumonia?",
    "options": {
      "A": "It damages airway epithelium and impairs local clearance of colonizing bacteria",
      "B": "It changes the bacterial capsule into a form that complement cannot recognize under the conditions described",
      "C": "It removes all B cells from the bloodstream before bacterial exposure occurs under the conditions described",
      "D": "It blocks neutrophil migration while leaving epithelial barriers intact under the conditions described"
    },
    "answer": "A",
    "explanation": "Viral injury can impair cilia, disrupt tight junctions, and alter mucus clearance. Bacteria that normally colonize the airway can then reach the lower tract. This is a common example of synergy between infections."
  },
  {
    "id": 9,
    "chapter": 1,
    "domain": "foundations",
    "question": "Which statement best describes virulence?",
    "options": {
      "A": "It describes the capacity of a microbe to cause harm in a given context",
      "B": "It is a fixed property that is identical for every host and tissue",
      "C": "It describes the ability of a microbe to spread only through airborne droplets",
      "D": "It describes a host response that always prevents symptoms after exposure"
    },
    "answer": "A",
    "explanation": "Virulence depends on microbial factors, host defenses, dose, and the site of infection. The same organism can behave differently in a healthy host and an immunocompromised one. Virulence is not a fixed label."
  },
  {
    "id": 10,
    "chapter": 1,
    "domain": "foundations",
    "question": "A patient improves after an antibiotic but then develops worsening fever, cough, and new lung infiltrates. Which explanation should be considered?",
    "options": {
      "A": "The first illness was definitely self-limited and the new findings are unrelated under the conditions described",
      "B": "The antibiotic switched the immune response from innate to adaptive immunity under the conditions described",
      "C": "A bacterial culture cannot change after treatment has already been started under the conditions described",
      "D": "An initially viral illness created conditions for a secondary bacterial infection"
    },
    "answer": "D",
    "explanation": "Viral injury can impair airway defenses and permit bacterial superinfection. A biphasic course should prompt reassessment. Clinical deterioration does not automatically mean the original treatment failed."
  },
  {
    "id": 11,
    "chapter": 2,
    "domain": "microbial_basics",
    "question": "A positive stool culture for E. coli is reported in a healthy person with no symptoms. Which interpretation is most accurate?",
    "options": {
      "A": "The result proves bloodstream invasion and requires immediate antibiotics",
      "B": "E. coli is always pathogenic whenever it is found in the colon",
      "C": "The organism may be part of the normal colonic microbiota",
      "D": "The laboratory has mistakenly identified a virus as a bacterium"
    },
    "answer": "C",
    "explanation": "Escherichia coli is a normal colonic organism. Whether it is pathogenic depends on the strain, site, and clinical context. The same species can cause urinary infection when it enters the bladder."
  },
  {
    "id": 12,
    "chapter": 2,
    "domain": "microbial_basics",
    "question": "Which feature is most characteristic of viruses compared with bacteria?",
    "options": {
      "A": "They contain their own ribosomes and can grow on nonliving media",
      "B": "They replicate only inside a living host cell using host machinery",
      "C": "They have a thick peptidoglycan wall that retains crystal violet",
      "D": "They are always larger than human cells and visible by light microscopy"
    },
    "answer": "B",
    "explanation": "Viruses lack a complete cellular system for independent reproduction. They must enter a living cell and use host resources. Bacteria have ribosomes and can usually be cultured on artificial media."
  },
  {
    "id": 13,
    "chapter": 2,
    "domain": "microbial_basics",
    "question": "A patient develops a catheter-associated infection with Staphylococcus epidermidis. Which feature best explains the persistent infection?",
    "options": {
      "A": "The organism forms a biofilm that protects it on the catheter surface",
      "B": "The organism has a segmented RNA genome that changes each generation",
      "C": "The organism becomes an obligate intracellular parasite inside red cells",
      "D": "The organism loses its cell wall and becomes invisible to immunity"
    },
    "answer": "A",
    "explanation": "Staphylococcus epidermidis is a common skin commensal and device pathogen. Biofilm protects organisms from immune cells and antibiotics. Removing the device is often necessary for cure."
  },
  {
    "id": 14,
    "chapter": 2,
    "domain": "microbial_basics",
    "question": "Which structure most directly helps a bacterium resist phagocytosis?",
    "options": {
      "A": "A ribosome that synthesizes bacterial proteins under the conditions described",
      "B": "A flagellum that rotates for movement through liquid under the conditions described",
      "C": "A plasmid that carries genes for metabolic enzymes under the conditions described",
      "D": "A polysaccharide capsule that covers the bacterial surface"
    },
    "answer": "D",
    "explanation": "Capsules can block complement and impair recognition by phagocytes. Antibody against the capsule improves clearance. Flagella and plasmids have other functions."
  },
  {
    "id": 15,
    "chapter": 2,
    "domain": "microbial_basics",
    "question": "A patient receives broad antibiotics and later develops C. difficile colitis. Which mechanism best explains the infection?",
    "options": {
      "A": "The antibiotic directly activates toxin production in every body tissue under the conditions described",
      "B": "The antibiotic selects for viruses that produce bacterial toxins under the conditions described",
      "C": "The antibiotic removes complement from the bloodstream completely under the conditions described",
      "D": "The antibiotic disrupts protective colonic microbiota and permits growth"
    },
    "answer": "D",
    "explanation": "Broad antibiotics alter the normal colonic community and create an environment in which C. difficile can germinate and produce toxins. The infection reflects a disturbed ecosystem as well as a pathogen."
  },
  {
    "id": 16,
    "chapter": 2,
    "domain": "microbial_basics",
    "question": "Which description best fits an obligate anaerobe?",
    "options": {
      "A": "It grows best only when oxygen is abundant in the environment",
      "B": "It grows and survives only in the absence of oxygen",
      "C": "It can switch freely between human cells and plant cells",
      "D": "It requires a bacterial virus in order to reproduce"
    },
    "answer": "B",
    "explanation": "Obligate anaerobes cannot tolerate normal oxygen levels. They commonly grow in deep wounds and abscesses with low oxygen. Specimen handling must protect them from air."
  },
  {
    "id": 17,
    "chapter": 2,
    "domain": "microbial_basics",
    "question": "Why is fungal ergosterol an attractive drug target?",
    "options": {
      "A": "It is present in bacterial cell walls but absent from human cells under the conditions described",
      "B": "It is found in fungal membranes and differs from major human lipids",
      "C": "It is unique to viruses and is produced only during replication under the conditions described",
      "D": "It is the main component of human red-cell membranes under the conditions described"
    },
    "answer": "B",
    "explanation": "Ergosterol is an important fungal membrane sterol. It differs enough from cholesterol that some antifungals can target it selectively. Selective toxicity is still incomplete because fungal and human cells share many processes."
  },
  {
    "id": 18,
    "chapter": 2,
    "domain": "microbial_basics",
    "question": "A patient with longstanding antibiotic use develops oral thrush. Which principle best explains this complication?",
    "options": {
      "A": "The antibiotic improves fungal attachment by removing all saliva",
      "B": "The antibiotic directly converts bacteria into Candida yeast cells",
      "C": "The antibiotic creates antibodies that stimulate fungal growth",
      "D": "Loss of competing bacteria permits Candida to overgrow on mucosa"
    },
    "answer": "D",
    "explanation": "Candida commonly colonizes mucosal surfaces. Broad antibiotics reduce competing bacteria and can allow overgrowth. Local immune factors and inhaled corticosteroids can contribute."
  },
  {
    "id": 19,
    "chapter": 2,
    "domain": "microbial_basics",
    "question": "Which statement best explains why a sputum culture can be misleading?",
    "options": {
      "A": "Sputum cultures always identify viruses instead of bacteria under the conditions described",
      "B": "The specimen can contain organisms from the mouth rather than the lung",
      "C": "The lungs contain no immune cells that can affect culture results under the conditions described",
      "D": "All bacteria in sputum are immediately killed by gastric acid under the conditions described"
    },
    "answer": "B",
    "explanation": "A sputum sample passes through the mouth and can be contaminated by oral flora. Specimen quality and the presence of inflammatory cells matter. The result must fit the clinical and imaging picture."
  },
  {
    "id": 20,
    "chapter": 2,
    "domain": "microbial_basics",
    "question": "Which interaction is an example of colonization resistance?",
    "options": {
      "A": "A virus enters a host cell and uses its ribosomes under the conditions described",
      "B": "A neutrophil engulfs a bacterium after antibody opsonization under the conditions described",
      "C": "Resident gut bacteria compete with an invader for nutrients and space",
      "D": "A toxin blocks protein synthesis inside a human epithelial cell under the conditions described"
    },
    "answer": "C",
    "explanation": "Colonization resistance is protection created by the resident community. Competition, antimicrobial products, and barrier effects limit invaders. It is not the same as phagocytosis or toxin action."
  },
  {
    "id": 21,
    "chapter": 3,
    "domain": "host_barriers",
    "question": "Which defense is most directly impaired in a patient with a large burn?",
    "options": {
      "A": "Antibody gene rearrangement in developing B cells under the conditions described",
      "B": "Positive selection of T cells within the thymus under the conditions described",
      "C": "The physical and antimicrobial barrier of the skin",
      "D": "Complement protein synthesis by the liver under the conditions described"
    },
    "answer": "C",
    "explanation": "Burns destroy the epidermis and expose tissue. The skin's physical, chemical, and microbial defenses are lost over the wound. Severe burns can later affect systemic immunity, but the immediate defect is barrier loss."
  },
  {
    "id": 22,
    "chapter": 3,
    "domain": "host_barriers",
    "question": "Which mechanism helps clear inhaled particles from the lower respiratory tract?",
    "options": {
      "A": "Gastric acid destroys organisms before they reach the lung under the conditions described",
      "B": "Skin keratinocytes neutralize inhaled bacterial toxins under the conditions described",
      "C": "Urine flow carries particles out through the bladder under the conditions described",
      "D": "Alveolar macrophages ingest particles that reach the air spaces"
    },
    "answer": "D",
    "explanation": "Alveolar macrophages patrol the lower airway and phagocytose particles and microbes. Mucus and cilia handle much of the upper airway. Gastric acid and urine flow are defenses at other sites."
  },
  {
    "id": 23,
    "chapter": 3,
    "domain": "host_barriers",
    "question": "A urinary catheter increases infection risk mainly because it does what?",
    "options": {
      "A": "Bypasses normal flushing and provides a foreign surface",
      "B": "Removes all antibodies from the bloodstream under the conditions described",
      "C": "Increases stomach acid production and bile secretion under the conditions described",
      "D": "Prevents neutrophils from leaving the bone marrow under the conditions described"
    },
    "answer": "A",
    "explanation": "The catheter crosses normal barriers and creates a surface for biofilm. It can also obstruct complete bladder emptying. Avoiding unnecessary catheters is a major prevention measure."
  },
  {
    "id": 24,
    "chapter": 3,
    "domain": "host_barriers",
    "question": "Which component is especially important for trapping and moving microbes away from the intestinal epithelium?",
    "options": {
      "A": "A keratin plate covering the villi of the small intestine",
      "B": "A cartilaginous ring that filters bacteria from portal blood",
      "C": "A layer of air that separates food from immune cells",
      "D": "A mucus layer moved by peristalsis and epithelial turnover"
    },
    "answer": "D",
    "explanation": "Mucus, peristalsis, epithelial renewal, acid, bile, and antimicrobial peptides limit microbial contact. The gut barrier is dynamic. It must prevent invasion while allowing nutrient absorption."
  },
  {
    "id": 25,
    "chapter": 3,
    "domain": "host_barriers",
    "question": "Which cells are tissue-resident sentinels that can capture antigen and migrate to lymph nodes?",
    "options": {
      "A": "Dendritic cells that sample antigen at barrier surfaces",
      "B": "Mature red blood cells that circulate without a nucleus",
      "C": "Platelets that release clotting factors at injured vessels",
      "D": "Osteoclasts that resorb bone during remodeling"
    },
    "answer": "A",
    "explanation": "Dendritic cells sample antigen in tissues and migrate to lymph nodes. They present antigen to T cells and provide costimulation. This links barrier defense to adaptive immunity."
  },
  {
    "id": 26,
    "chapter": 3,
    "domain": "host_barriers",
    "question": "Why does smoking increase the risk of respiratory infection?",
    "options": {
      "A": "It improves mucociliary clearance while reducing antibody production",
      "B": "It damages cilia and alters airway epithelial defenses",
      "C": "It removes alveolar macrophages from the lung permanently",
      "D": "It makes the airway more alkaline and kills all bacteria"
    },
    "answer": "B",
    "explanation": "Smoke impairs ciliary movement and epithelial repair and changes mucus and inflammation. These effects make it harder to clear organisms. The immune system may be both stimulated and dysfunctional."
  },
  {
    "id": 27,
    "chapter": 3,
    "domain": "host_barriers",
    "question": "Which barrier is most important for keeping the normal microbiota of the colon away from sterile tissue?",
    "options": {
      "A": "A single layer of keratinized skin covering the colon under the conditions described",
      "B": "A complement membrane attack complex on every bacterium under the conditions described",
      "C": "A continuous epithelial tight-junction barrier with mucus",
      "D": "A high concentration of red blood cells in the lumen under the conditions described"
    },
    "answer": "C",
    "explanation": "The intestinal epithelium and mucus layer separate the dense colonic community from underlying tissue. Tight junctions limit paracellular movement. A breach can allow microbial products into the bloodstream."
  },
  {
    "id": 28,
    "chapter": 3,
    "domain": "host_barriers",
    "question": "Which statement best explains why contact lens hygiene matters for eye infection?",
    "options": {
      "A": "Lenses can reduce corneal oxygen and create a microbial surface",
      "B": "Lenses increase corneal oxygen and prevent microbial attachment",
      "C": "Lenses directly produce antibodies against corneal cells",
      "D": "Lenses replace the need for tears and eyelid closure"
    },
    "answer": "A",
    "explanation": "Contact lenses can reduce oxygen supply and provide a surface for organisms. Poor cleaning and overnight wear increase risk. Tears and an intact corneal epithelium are important defenses."
  },
  {
    "id": 29,
    "chapter": 3,
    "domain": "host_barriers",
    "question": "A patient with poor circulation has a chronic leg ulcer. Which factor most directly delays barrier repair?",
    "options": {
      "A": "Increased blood flow removes all inflammatory cells",
      "B": "The skin produces too much keratin in the absence of blood",
      "C": "Reduced blood flow limits oxygen and nutrient delivery",
      "D": "The ulcer prevents microbes from reaching the tissue"
    },
    "answer": "C",
    "explanation": "Healing requires oxygen, nutrients, immune cells, and removal of dead tissue. Poor perfusion impairs all of these. Infection risk rises when the barrier remains open."
  },
  {
    "id": 30,
    "chapter": 3,
    "domain": "host_barriers",
    "question": "Which mucosal antibody is especially important for neutralization at epithelial surfaces?",
    "options": {
      "A": "IgE bound to circulating basophils under the conditions described",
      "B": "Secretory IgA transported across epithelium",
      "C": "IgM in the form of a pentamer in blood under the conditions described",
      "D": "IgG bound to placental Fc receptors under the conditions described"
    },
    "answer": "B",
    "explanation": "Secretory IgA is transported across mucosal epithelium and helps block attachment. It can trap organisms in mucus. It usually produces less inflammatory damage than systemic IgG or IgM."
  },
  {
    "id": 31,
    "chapter": 4,
    "domain": "innate_immunity",
    "question": "Which sequence best explains redness and warmth at the site of a bacterial skin infection?",
    "options": {
      "A": "Vasoconstriction reduces blood flow and concentrates immune cells in tissue",
      "B": "Lymphatic obstruction prevents fluid from leaving the infected area",
      "C": "Red blood cells directly engulf bacteria and release heat",
      "D": "Vasodilation increases local blood flow after inflammatory mediator release"
    },
    "answer": "D",
    "explanation": "Histamine, prostaglandins, and other mediators dilate local vessels. Increased blood flow produces redness and warmth. Vasoconstriction would reduce these findings."
  },
  {
    "id": 32,
    "chapter": 4,
    "domain": "innate_immunity",
    "question": "A wound becomes swollen because fluid and protein leak from vessels. Which change is responsible?",
    "options": {
      "A": "Reduced endothelial permeability and tighter junctions under the conditions described",
      "B": "Loss of all plasma proteins from the lymphatic system under the conditions described",
      "C": "Increased endothelial permeability and protein-rich exudation",
      "D": "Immediate closure of capillary beds around the wound under the conditions described"
    },
    "answer": "C",
    "explanation": "Inflammatory mediators increase endothelial permeability. Fluid, protein, and immune molecules enter tissue and create an exudate. The resulting pressure contributes to swelling and pain."
  },
  {
    "id": 33,
    "chapter": 4,
    "domain": "innate_immunity",
    "question": "Which cell is usually first to arrive in large numbers during acute bacterial infection?",
    "options": {
      "A": "Memory B cells that have already encountered the antigen under the conditions described",
      "B": "Mature red blood cells carrying oxygen to the tissue under the conditions described",
      "C": "Neutrophils recruited by chemokines and complement fragments",
      "D": "Thymic epithelial cells that select developing T cells under the conditions described"
    },
    "answer": "C",
    "explanation": "Neutrophils are rapidly recruited from blood to acute infection. They phagocytose opsonized bacteria and release antimicrobial molecules. Macrophages arrive and persist longer."
  },
  {
    "id": 34,
    "chapter": 4,
    "domain": "innate_immunity",
    "question": "Which mediator is a major driver of hepatic C-reactive protein production?",
    "options": {
      "A": "IL-6 released by macrophages and other immune cells",
      "B": "Histamine released from tissue mast cells under the conditions described",
      "C": "Prostaglandin E2 produced by the hypothalamus under the conditions described",
      "D": "C3a generated by complement activation under the conditions described"
    },
    "answer": "A",
    "explanation": "IL-6 stimulates the liver to produce acute-phase proteins including C-reactive protein. CRP supports complement and phagocytosis. The response is nonspecific but useful."
  },
  {
    "id": 35,
    "chapter": 4,
    "domain": "innate_immunity",
    "question": "A patient with severe infection has fever and low blood pressure. Which cytokine contributes strongly to vasodilation and capillary leak?",
    "options": {
      "A": "Transforming growth factor beta produced by repairing tissue",
      "B": "TNF produced by activated macrophages and other immune cells",
      "C": "IL-10 produced to suppress inflammatory cytokine release",
      "D": "Secretory IgA produced by mucosal plasma cells"
    },
    "answer": "B",
    "explanation": "TNF activates endothelium and contributes to vasodilation, adhesion molecule expression, and capillary leak. At high systemic levels it can contribute to shock. IL-10 is a regulatory cytokine."
  },
  {
    "id": 36,
    "chapter": 4,
    "domain": "innate_immunity",
    "question": "Which process helps resolve acute inflammation after the stimulus is removed?",
    "options": {
      "A": "Continued recruitment of neutrophils without apoptosis under the conditions described",
      "B": "Permanent activation of endothelial adhesion molecules under the conditions described",
      "C": "Persistent complement activation on host cell surfaces under the conditions described",
      "D": "Macrophage clearance of apoptotic neutrophils and tissue debris"
    },
    "answer": "D",
    "explanation": "Efferocytosis removes apoptotic neutrophils and promotes repair. Lipid mediators and anti-inflammatory cytokines help end the response. Failed resolution leads to chronic inflammation."
  },
  {
    "id": 37,
    "chapter": 4,
    "domain": "innate_immunity",
    "question": "Which finding is most typical of a granuloma?",
    "options": {
      "A": "A collection of red blood cells inside a blood vessel",
      "B": "A fluid-filled blister beneath the epidermis",
      "C": "An organized cluster of macrophages and lymphocytes",
      "D": "A layer of keratin covering a healing skin wound"
    },
    "answer": "C",
    "explanation": "Granulomas are organized inflammatory lesions rich in macrophages, often with T cells and giant cells. They can contain persistent organisms. They may protect tissue but can also cause fibrosis and organ damage."
  },
  {
    "id": 38,
    "chapter": 4,
    "domain": "innate_immunity",
    "question": "Why does chronic infection contribute to anemia?",
    "options": {
      "A": "Inflammation directly converts red blood cells into white cells",
      "B": "Chronic infection increases iron absorption from the intestine",
      "C": "Fever destroys all erythroid precursors in the bone marrow",
      "D": "Inflammation increases hepcidin and reduces iron availability"
    },
    "answer": "D",
    "explanation": "IL-6 increases hepcidin, which reduces iron absorption and release from stores. Iron restriction can limit microbial growth but also impairs red-cell production. This is anemia of inflammation."
  },
  {
    "id": 39,
    "chapter": 4,
    "domain": "innate_immunity",
    "question": "Which change is most consistent with increased vascular permeability at an inflammatory site?",
    "options": {
      "A": "A protein-poor transudate caused by high venous pressure",
      "B": "A collection of air in the tissue space",
      "C": "A protein-rich exudate containing immune molecules",
      "D": "A loss of blood flow from the affected area"
    },
    "answer": "C",
    "explanation": "Inflammation produces an exudate with high protein content. A transudate is usually caused by pressure changes and has less protein. The distinction helps classify fluid collections."
  },
  {
    "id": 40,
    "chapter": 4,
    "domain": "innate_immunity",
    "question": "A patient develops a deep abscess with low oxygen at its center. Which condition favors anaerobic growth?",
    "options": {
      "A": "An acidic, low-oxygen environment protected from circulation",
      "B": "High oxygen and rapid blood flow through the cavity under the conditions described",
      "C": "A surface exposed continuously to room air under the conditions described",
      "D": "Complete sterilization of the surrounding tissue under the conditions described"
    },
    "answer": "A",
    "explanation": "Abscess centers can be acidic, low in oxygen, and poorly perfused. These conditions favor anaerobes and reduce antibiotic delivery. Drainage is often necessary."
  },
  {
    "id": 41,
    "chapter": 5,
    "domain": "innate_immunity",
    "question": "Which molecule is a pathogen-associated molecular pattern recognized by TLR4?",
    "options": {
      "A": "Lipopolysaccharide on the outer membrane of gram-negative bacteria",
      "B": "A human nuclear protein released after cell injury under the conditions described",
      "C": "Cholesterol carried in human low-density lipoprotein particles under the conditions described",
      "D": "A host peptide displayed on MHC class I molecules under the conditions described"
    },
    "answer": "A",
    "explanation": "TLR4 recognizes lipopolysaccharide with CD14 and MD-2. LPS is a classic PAMP from gram-negative bacteria. Host damage molecules are DAMPs, not PAMPs."
  },
  {
    "id": 42,
    "chapter": 5,
    "domain": "innate_immunity",
    "question": "A child has recurrent abscesses with catalase-positive organisms and a normal neutrophil count. Which test best assesses the likely defect?",
    "options": {
      "A": "CD4 count to measure T-helper cell number under the conditions described",
      "B": "CH50 to measure classical complement function under the conditions described",
      "C": "Serum IgE to measure allergic sensitization under the conditions described",
      "D": "Dihydrorhodamine testing of the neutrophil oxidative burst"
    },
    "answer": "D",
    "explanation": "The pattern suggests chronic granulomatous disease, a killing defect. Dihydrorhodamine flow cytometry measures the oxidative burst. Cell number and antibody levels can be normal."
  },
  {
    "id": 43,
    "chapter": 5,
    "domain": "innate_immunity",
    "question": "Which step is directly impaired in leukocyte adhesion deficiency type 1?",
    "options": {
      "A": "Antigen processing inside dendritic-cell endosomes under the conditions described",
      "B": "Class switching from IgM to IgA in germinal centers under the conditions described",
      "C": "Formation of the membrane attack complex by C9 under the conditions described",
      "D": "Firm arrest of neutrophils on endothelium through CD18 integrins"
    },
    "answer": "D",
    "explanation": "CD18 integrins mediate firm adhesion and transmigration. Without them, neutrophils remain in blood and infections contain little pus. The defect is in trafficking rather than microbial killing."
  },
  {
    "id": 44,
    "chapter": 5,
    "domain": "innate_immunity",
    "question": "Which process makes phagocytosis more efficient after antibody binds a bacterium?",
    "options": {
      "A": "Neutralization of bacterial DNA by histamine under the conditions described",
      "B": "Opsonization and recognition of antibody by Fc receptors",
      "C": "Conversion of the bacterium into a virus-like particle under the conditions described",
      "D": "Blockade of all complement activity in the tissue under the conditions described"
    },
    "answer": "B",
    "explanation": "Antibody coats the microbe and Fc receptors on phagocytes bind the antibody. Complement C3b can add another opsonin. Together they make uptake much more efficient."
  },
  {
    "id": 45,
    "chapter": 5,
    "domain": "innate_immunity",
    "question": "Which function is performed by caspases after NLRP3 inflammasome activation?",
    "options": {
      "A": "They synthesize antibody heavy and light chains",
      "B": "They rearrange T-cell receptor variable segments",
      "C": "They activate complement proteins in the liver",
      "D": "They mature IL-1beta and cleave gasdermin D"
    },
    "answer": "D",
    "explanation": "Caspase-1 cleaves pro-IL-1beta and pro-IL-18 into active cytokines. It also cleaves gasdermin D to form membrane pores. This can drive inflammation and pyroptosis."
  },
  {
    "id": 46,
    "chapter": 5,
    "domain": "innate_immunity",
    "question": "Which intracellular pathogen is especially adapted to survive inside macrophage phagosomes?",
    "options": {
      "A": "Mycobacterium tuberculosis resisting phagosome maturation",
      "B": "Streptococcus pyogenes growing only on skin surfaces",
      "C": "Vibrio cholerae remaining entirely in the intestinal lumen",
      "D": "Clostridium tetani producing toxin only in soil"
    },
    "answer": "A",
    "explanation": "Mycobacterium tuberculosis can interfere with phagosome maturation and survive inside macrophages. T-cell help and IFN-gamma are needed for stronger macrophage killing. The organism can persist in granulomas."
  },
  {
    "id": 47,
    "chapter": 5,
    "domain": "innate_immunity",
    "question": "Which statement best describes an endosomal Toll-like receptor?",
    "options": {
      "A": "It recognizes only host peptides displayed on MHC molecules under the conditions described",
      "B": "It detects nucleic acids after material is taken into the cell",
      "C": "It forms the membrane attack complex on bacterial surfaces under the conditions described",
      "D": "It rearranges variable gene segments in developing B cells under the conditions described"
    },
    "answer": "B",
    "explanation": "Endosomal TLRs include TLR3, TLR7, TLR8, and TLR9. They survey nucleic acids from ingested material. Their location limits accidental recognition of host nucleic acids."
  },
  {
    "id": 48,
    "chapter": 5,
    "domain": "innate_immunity",
    "question": "Which cytokine is especially important for activating macrophages to kill intracellular bacteria?",
    "options": {
      "A": "IL-4 produced by Th2 cells during helminth infection",
      "B": "IL-10 produced by regulatory immune cells",
      "C": "IFN-gamma produced by Th1 and NK cells",
      "D": "IgE produced by allergen-stimulated B cells"
    },
    "answer": "C",
    "explanation": "IFN-gamma activates macrophages and enhances microbicidal mechanisms. Th1 cells and NK cells are major sources. IL-4 and IL-10 favor different or more regulatory programs."
  },
  {
    "id": 49,
    "chapter": 5,
    "domain": "innate_immunity",
    "question": "Which mechanism contributes to tissue injury during severe inflammation?",
    "options": {
      "A": "Release of proteases and reactive oxygen species into tissue",
      "B": "Limited leukocyte recruitment to the affected area under the conditions described",
      "C": "Rapid apoptosis of all inflammatory cells before they act under the conditions described",
      "D": "Complete absence of reactive oxygen species in phagocytes under the conditions described"
    },
    "answer": "A",
    "explanation": "Neutrophil and macrophage products can damage host tissue when released outside the phagosome. Inflammation is protective only when it is controlled. Excessive or prolonged activation causes collateral injury."
  },
  {
    "id": 50,
    "chapter": 5,
    "domain": "innate_immunity",
    "question": "A patient has delayed umbilical cord separation and recurrent infections without pus. Which defense is most likely defective?",
    "options": {
      "A": "Neutrophil adhesion and migration into infected tissue",
      "B": "Classical complement activation by IgM under the conditions described",
      "C": "Antibody class switching in germinal centers under the conditions described",
      "D": "MHC class I presentation of viral peptides under the conditions described"
    },
    "answer": "A",
    "explanation": "This history fits leukocyte adhesion deficiency. Neutrophils cannot leave blood efficiently, so pus fails to form and the blood count is high. Complement, B-cell, and MHC tests would not explain the full pattern."
  },
  {
    "id": 51,
    "chapter": 6,
    "domain": "innate_immunity",
    "question": "A virus removes MHC class I from an infected cell. Which immune response is best suited to detect the change?",
    "options": {
      "A": "Classical complement activation by preformed IgM",
      "B": "Neutralization by mucosal secretory IgA",
      "C": "Opsonization by C-reactive protein only",
      "D": "Natural killer cell missing-self recognition"
    },
    "answer": "D",
    "explanation": "Loss of MHC class I removes an inhibitory signal for NK cells. Activating stress signals can then dominate and trigger killing. This complements CD8 T-cell surveillance."
  },
  {
    "id": 52,
    "chapter": 6,
    "domain": "innate_immunity",
    "question": "Which mechanism is used by NK cells to kill a target cell?",
    "options": {
      "A": "Secretion of large amounts of antibody into the tissue",
      "B": "Formation of a granuloma around the infected cell",
      "C": "Release of perforin and granzymes at an immune synapse",
      "D": "Activation of the classical complement pathway by C1q"
    },
    "answer": "C",
    "explanation": "NK cells release cytotoxic granules toward the target. Perforin creates pores and granzymes trigger apoptosis. NK cells can also use death receptors and antibody-dependent cellular cytotoxicity."
  },
  {
    "id": 53,
    "chapter": 6,
    "domain": "innate_immunity",
    "question": "Which receptor allows an NK cell to recognize an antibody-coated target cell?",
    "options": {
      "A": "The T-cell receptor alpha-beta complex",
      "B": "The B-cell receptor immunoglobulin complex",
      "C": "MHC class II on the target cell",
      "D": "CD16, also called FcgammaRIII"
    },
    "answer": "D",
    "explanation": "CD16 binds the Fc portion of IgG on a coated target. Crosslinking activates antibody-dependent cellular cytotoxicity. This connects humoral immunity to innate killing."
  },
  {
    "id": 54,
    "chapter": 6,
    "domain": "innate_immunity",
    "question": "Which innate lymphoid cell subset produces IL-5 and IL-13 and supports type 2 responses?",
    "options": {
      "A": "ILC1 cells that produce large amounts of IFN-gamma under the conditions described",
      "B": "ILC3 cells that produce IL-17 and IL-22 under the conditions described",
      "C": "ILC2 cells that promote eosinophil and mucus responses",
      "D": "Cytotoxic CD8 T cells that recognize viral peptides under the conditions described"
    },
    "answer": "C",
    "explanation": "ILC2 cells produce type 2 cytokines and support allergy, helminth defense, and barrier responses. ILC1 and ILC3 support different programs. They do not use rearranged antigen receptors."
  },
  {
    "id": 55,
    "chapter": 6,
    "domain": "innate_immunity",
    "question": "Which finding best fits a functional NK-cell defect?",
    "options": {
      "A": "Recurrent pneumococcal sepsis with absent splenic function under the conditions described",
      "B": "Chronic granulomas with catalase-positive bacterial abscesses under the conditions described",
      "C": "Recurrent severe herpesvirus infections with otherwise normal major tests",
      "D": "Low IgA with recurrent mucosal respiratory infections under the conditions described"
    },
    "answer": "C",
    "explanation": "NK cells are especially important in early control of herpesviruses. A functional defect may appear with normal T-cell and B-cell tests. The organism pattern helps identify the defect."
  },
  {
    "id": 56,
    "chapter": 6,
    "domain": "innate_immunity",
    "question": "Why does a virus that reduces MHC class I risk detection by both T cells and NK cells?",
    "options": {
      "A": "Both cell types require MHC class II for activation",
      "B": "NK cells cannot kill cells without surface antibodies",
      "C": "T cells become more active when MHC is absent",
      "D": "T cells lose a target while NK inhibition also falls"
    },
    "answer": "D",
    "explanation": "CD8 T cells need MHC class I to see viral peptides. NK cells are inhibited by MHC class I, so losing it makes them more likely to kill. The virus must evade both systems."
  },
  {
    "id": 57,
    "chapter": 6,
    "domain": "innate_immunity",
    "question": "Which cytokine released by NK cells helps activate macrophages?",
    "options": {
      "A": "IL-4 that promotes Th2 differentiation under the conditions described",
      "B": "IL-10 that suppresses inflammation broadly under the conditions described",
      "C": "IFN-gamma that supports type 1 macrophage function",
      "D": "IL-5 that recruits eosinophils to tissue under the conditions described"
    },
    "answer": "C",
    "explanation": "IFN-gamma from NK cells can activate macrophages before adaptive T-cell responses mature. This helps contain intracellular organisms. NK cells therefore influence both innate and adaptive immunity."
  },
  {
    "id": 58,
    "chapter": 6,
    "domain": "innate_immunity",
    "question": "Which statement best describes the role of inhibitory receptors on NK cells?",
    "options": {
      "A": "They guarantee that every infected cell is killed",
      "B": "They recognize microbial toxins and activate complement",
      "C": "They detect normal MHC and restrain unnecessary killing",
      "D": "They rearrange to create new antigen specificities"
    },
    "answer": "C",
    "explanation": "Inhibitory receptors detect MHC class I and other self-signals. Healthy cells are spared when inhibition dominates. Loss of these signals shifts the balance toward activation."
  },
  {
    "id": 59,
    "chapter": 6,
    "domain": "innate_immunity",
    "question": "Which feature distinguishes ILCs from conventional T cells?",
    "options": {
      "A": "They cannot produce cytokines after stimulation",
      "B": "They are unable to reside within mucosal tissue",
      "C": "They only kill cells after antibody opsonization",
      "D": "They lack rearranged antigen-specific receptors"
    },
    "answer": "D",
    "explanation": "ILCs are innate lymphocytes without rearranged T-cell receptors. They respond rapidly to tissue cytokines and microbial signals. Their cytokine patterns overlap with T-helper subsets."
  },
  {
    "id": 60,
    "chapter": 6,
    "domain": "innate_immunity",
    "question": "A tumor downregulates MHC class I and expresses stress ligands. Which response is most likely?",
    "options": {
      "A": "Stronger NK-cell activation from missing self plus stress",
      "B": "Reduced NK-cell interest because MHC is absent",
      "C": "Immediate neutralization by class II restricted CD4 cells",
      "D": "Increased classical complement activation by tumor C1q"
    },
    "answer": "A",
    "explanation": "Loss of MHC reduces inhibition, and stress ligands increase activation. NK cells can kill tumor cells with this pattern. Tumors may create other immunosuppressive defenses."
  },
  {
    "id": 61,
    "chapter": 7,
    "domain": "humoral_immunity",
    "question": "A patient has recurrent meningococcal infections and a terminal complement defect. Which function is most directly impaired?",
    "options": {
      "A": "Antibody class switching in lymph nodes",
      "B": "Recognition of peptide antigen by T cells",
      "C": "Phagocytosis of antibody-coated red cells",
      "D": "Formation of the membrane attack complex"
    },
    "answer": "D",
    "explanation": "Terminal complement forms a pore through C5b, C6, C7, C8, and C9. Neisseria species are especially vulnerable to this pathway. Early complement functions may remain intact."
  },
  {
    "id": 62,
    "chapter": 7,
    "domain": "humoral_immunity",
    "question": "Which complement fragment is the main opsonin that coats microbial surfaces?",
    "options": {
      "A": "C3b bound covalently to nearby surfaces",
      "B": "C3a released during convertase activity",
      "C": "C5a produced after C5 cleavage",
      "D": "C9 inserted into the target membrane"
    },
    "answer": "A",
    "explanation": "C3b is the major opsonin and is recognized by complement receptors on phagocytes. C3a and C5a recruit inflammatory cells. C9 forms part of the membrane attack complex."
  },
  {
    "id": 63,
    "chapter": 7,
    "domain": "humoral_immunity",
    "question": "Which pathway begins when mannose-binding lectin binds microbial carbohydrates?",
    "options": {
      "A": "The classical pathway after C1q binds antibody under the conditions described",
      "B": "The lectin pathway after recognition proteins bind surfaces",
      "C": "The alternative pathway after spontaneous C3 hydrolysis under the conditions described",
      "D": "The terminal pathway after C5b binds C6 under the conditions described"
    },
    "answer": "B",
    "explanation": "Mannose-binding lectin and ficolins initiate the lectin pathway. Associated proteases cleave C4 and C2. The pathway then converges with the classical pathway."
  },
  {
    "id": 64,
    "chapter": 7,
    "domain": "humoral_immunity",
    "question": "Why does the alternative complement pathway amplify on microbial surfaces more than on healthy host cells?",
    "options": {
      "A": "Host cells contain no complement receptors or membrane proteins under the conditions described",
      "B": "Microbes lack the host regulatory proteins that restrain amplification",
      "C": "Microbial surfaces prevent C3b from binding to any nearby molecule under the conditions described",
      "D": "The alternative pathway requires antibody for every activation event under the conditions described"
    },
    "answer": "B",
    "explanation": "Host cells carry regulators such as factor H, CD46, CD55, and CD59. Many microbes lack these protections. The alternative pathway amplifies C3b where regulation is weak."
  },
  {
    "id": 65,
    "chapter": 7,
    "domain": "humoral_immunity",
    "question": "A deficiency of C1 inhibitor causes hereditary angioedema by which general mechanism?",
    "options": {
      "A": "Loss of antibody production by plasma cells under the conditions described",
      "B": "Uncontrolled complement and contact pathway activation",
      "C": "Failure of neutrophils to produce an oxidative burst under the conditions described",
      "D": "Absence of MHC class I on endothelial cells under the conditions described"
    },
    "answer": "B",
    "explanation": "C1 inhibitor regulates several proteases, including complement and contact pathway components. Loss leads to excess bradykinin and recurrent angioedema. Urticaria is usually absent."
  },
  {
    "id": 66,
    "chapter": 7,
    "domain": "humoral_immunity",
    "question": "Which complement components are called anaphylatoxins because they recruit and activate inflammatory cells?",
    "options": {
      "A": "C1q and C1r bound to antibody under the conditions described",
      "B": "C5b and C6 assembling on membranes under the conditions described",
      "C": "Factor B and factor D in plasma under the conditions described",
      "D": "C3a and C5a released during activation"
    },
    "answer": "D",
    "explanation": "C3a and C5a increase vascular permeability and recruit inflammatory cells. C5a is a powerful neutrophil chemoattractant. C5b and C6 participate in the terminal pathway."
  },
  {
    "id": 67,
    "chapter": 7,
    "domain": "humoral_immunity",
    "question": "Which complement abnormality is associated with paroxysmal nocturnal hemoglobinuria?",
    "options": {
      "A": "Excess C1q binding to apoptotic cells",
      "B": "Absent terminal complement components from birth",
      "C": "Loss of CD55 and CD59 on red blood cells",
      "D": "Increased mannose-binding lectin activity in the liver"
    },
    "answer": "C",
    "explanation": "PNH cells lack glycosylphosphatidylinositol-anchored proteins, including CD55 and CD59. Without these regulators, complement damages red cells. The result is intravascular hemolysis."
  },
  {
    "id": 68,
    "chapter": 7,
    "domain": "humoral_immunity",
    "question": "Which test measures the functional activity of the classical complement pathway?",
    "options": {
      "A": "The DHR assay using stimulated neutrophils",
      "B": "The CH50 assay using antibody-coated red cells",
      "C": "The tuberculin skin test using purified antigen",
      "D": "The Coombs test using anti-human globulin"
    },
    "answer": "B",
    "explanation": "CH50 measures classical pathway hemolytic activity. A low result can reflect a component deficiency or consumption. The AH50 test assesses the alternative pathway."
  },
  {
    "id": 69,
    "chapter": 7,
    "domain": "humoral_immunity",
    "question": "A patient receiving a C5 inhibitor needs education about which infection risk?",
    "options": {
      "A": "Recurrent pneumococcal skin abscesses only",
      "B": "Chronic hepatitis C with liver fibrosis",
      "C": "Pneumocystis pneumonia from T-cell loss",
      "D": "Invasive neisserial infection"
    },
    "answer": "D",
    "explanation": "C5 blockade prevents membrane attack complex formation. Terminal complement is important for defense against Neisseria. Vaccination and urgent evaluation of fever are essential."
  },
  {
    "id": 70,
    "chapter": 7,
    "domain": "humoral_immunity",
    "question": "How does complement help the adaptive B-cell response?",
    "options": {
      "A": "It rearranges T-cell receptor genes in the thymus",
      "B": "C3d bound to antigen engages the CD21 coreceptor",
      "C": "It destroys all antigen before B cells can see it",
      "D": "It converts plasma cells into neutrophils"
    },
    "answer": "B",
    "explanation": "Complement-coated antigen can engage CD21 on B cells and lower the activation threshold. Follicular dendritic cells retain complement-coated antigen. Complement therefore links innate recognition to adaptive antibody responses."
  },
  {
    "id": 71,
    "chapter": 8,
    "domain": "adaptive_immunity",
    "question": "A viral protein is produced inside an infected cell. Which pathway displays a peptide from that protein to CD8 T cells?",
    "options": {
      "A": "The MHC class II pathway after endosomal uptake of extracellular protein",
      "B": "The complement pathway after C1q binds viral particles",
      "C": "The MHC class I pathway after proteasomal degradation and TAP transport",
      "D": "The B-cell receptor pathway after surface immunoglobulin binding"
    },
    "answer": "C",
    "explanation": "Cytosolic proteins are degraded by the proteasome and transported by TAP into the endoplasmic reticulum. Peptides load onto MHC class I. CD8 T cells recognize the resulting complexes."
  },
  {
    "id": 72,
    "chapter": 8,
    "domain": "adaptive_immunity",
    "question": "Which cell type most efficiently presents endocytosed antigen on MHC class II to activate a naive CD4 T cell?",
    "options": {
      "A": "A mature red blood cell circulating in the bloodstream under the conditions described",
      "B": "A platelet releasing clotting factors at a wound under the conditions described",
      "C": "A cytotoxic T cell killing an infected epithelial cell under the conditions described",
      "D": "A dendritic cell with high MHC and costimulatory molecules"
    },
    "answer": "D",
    "explanation": "Mature dendritic cells express high levels of MHC class II and costimulatory molecules. They migrate to lymph nodes and activate naive T cells. Antigen presentation without costimulation favors tolerance."
  },
  {
    "id": 73,
    "chapter": 8,
    "domain": "adaptive_immunity",
    "question": "A virus blocks TAP function in an infected cell. What is the most likely consequence?",
    "options": {
      "A": "Increased MHC class II expression on the infected cell",
      "B": "Enhanced classical complement activation by viral proteins",
      "C": "Reduced MHC class I peptide loading and surface display",
      "D": "Immediate differentiation of the infected cell into a plasma cell"
    },
    "answer": "C",
    "explanation": "TAP moves cytosolic peptides into the endoplasmic reticulum for MHC class I loading. Blocking TAP reduces stable class I expression. This may hide the cell from CD8 T cells but expose it to NK cells."
  },
  {
    "id": 74,
    "chapter": 8,
    "domain": "adaptive_immunity",
    "question": "Which molecule helps remove CLIP and load peptides onto MHC class II?",
    "options": {
      "A": "Beta2-microglobulin in the endoplasmic reticulum",
      "B": "Perforin released from cytotoxic granules",
      "C": "HLA-DM within the class II loading compartment",
      "D": "C3b deposited on the antigen surface"
    },
    "answer": "C",
    "explanation": "HLA-DM catalyzes the exchange of CLIP for high-affinity peptides. Stable peptide-MHC class II complexes then move to the cell surface. The invariant chain and HLA-DM control this pathway."
  },
  {
    "id": 75,
    "chapter": 8,
    "domain": "adaptive_immunity",
    "question": "Which process allows a dendritic cell to present an ingested dead infected cell to CD8 T cells?",
    "options": {
      "A": "Class switching of immunoglobulin constant regions",
      "B": "Cross-presentation through the MHC class I pathway",
      "C": "Complement fixation by the classical pathway",
      "D": "Positive selection of thymocytes in the cortex"
    },
    "answer": "B",
    "explanation": "Cross-presentation delivers exogenous antigen into the MHC class I pathway. Specialized dendritic cells perform this efficiently. It is important for antiviral and antitumor immunity."
  },
  {
    "id": 76,
    "chapter": 8,
    "domain": "adaptive_immunity",
    "question": "Which property is characteristic of MHC class I molecules?",
    "options": {
      "A": "They are expressed only on B cells and dendritic cells under the conditions described",
      "B": "They have an open groove that binds very long peptides under the conditions described",
      "C": "They use a heavy chain with beta2-microglobulin and present short peptides",
      "D": "They are encoded only by mitochondrial DNA under the conditions described in the clinical setting described"
    },
    "answer": "C",
    "explanation": "MHC class I has a polymorphic heavy chain and beta2-microglobulin. Its closed groove usually holds short peptides. It is expressed on nearly all nucleated cells."
  },
  {
    "id": 77,
    "chapter": 8,
    "domain": "adaptive_immunity",
    "question": "Why can a peptide vaccine produce T-cell anergy rather than activation?",
    "options": {
      "A": "The peptide cannot be seen by any T-cell receptor under the conditions described",
      "B": "The peptide directly destroys all dendritic cells under the conditions described",
      "C": "MHC molecules cannot bind peptides from vaccines under the conditions described",
      "D": "Antigen is presented without sufficient costimulation"
    },
    "answer": "D",
    "explanation": "Signal one without adequate signal two can make a T cell anergic. Mature dendritic cells provide costimulation and cytokines. Vaccine design must include an appropriate activation context."
  },
  {
    "id": 78,
    "chapter": 8,
    "domain": "adaptive_immunity",
    "question": "Which cytokine especially promotes Th1 differentiation by supporting T-bet expression?",
    "options": {
      "A": "IL-4 produced during type 2 immune responses",
      "B": "IL-12 produced by activated dendritic cells",
      "C": "IL-10 produced by regulatory cells",
      "D": "TGF-beta combined with IL-6 in mucosal tissue"
    },
    "answer": "B",
    "explanation": "IL-12 promotes Th1 differentiation and IFN-gamma production. Th1 cells support macrophage activation. IL-4 and TGF-beta support different helper programs."
  },
  {
    "id": 79,
    "chapter": 8,
    "domain": "adaptive_immunity",
    "question": "Which statement explains why HLA diversity is useful to a population?",
    "options": {
      "A": "Every person expresses exactly the same HLA alleles under the conditions described",
      "B": "HLA molecules prevent all viruses from entering cells under the conditions described",
      "C": "Different HLA molecules present different peptide sets",
      "D": "HLA genes are identical to bacterial virulence genes under the conditions described"
    },
    "answer": "C",
    "explanation": "HLA polymorphism changes which peptides can be displayed. A pathogen that escapes one person's alleles may be visible to another person's. This broadens population-level immune coverage."
  },
  {
    "id": 80,
    "chapter": 8,
    "domain": "adaptive_immunity",
    "question": "Why is HLA-B*57:01 testing required before treatment with abacavir in many settings?",
    "options": {
      "A": "The allele prevents the drug from reaching bacterial ribosomes under the conditions described",
      "B": "The drug alters self-peptide presentation in carriers and can trigger T cells",
      "C": "The allele causes complete absence of MHC class I molecules under the conditions described",
      "D": "The allele increases the drug's ability to block viral reverse transcriptase under the conditions described"
    },
    "answer": "B",
    "explanation": "Abacavir can bind within HLA-B*57:01 and alter the self-peptide repertoire. Carrier T cells may then attack tissues and cause hypersensitivity. Screening reduces a serious preventable reaction."
  },
  {
    "id": 81,
    "chapter": 9,
    "domain": "adaptive_immunity",
    "question": "Which process creates the variable region of an immunoglobulin heavy chain?",
    "options": {
      "A": "Recombination of V, D, and J gene segments",
      "B": "Hydrolysis of C3 into C3a and C3b",
      "C": "Positive selection of thymocytes on cortical epithelium",
      "D": "Crosslinking of IgE on a mast-cell surface"
    },
    "answer": "A",
    "explanation": "Heavy-chain V, D, and J segments recombine during B-cell development. Junctional diversity adds further variation. Light chains use V and J segments."
  },
  {
    "id": 82,
    "chapter": 9,
    "domain": "adaptive_immunity",
    "question": "A B cell in the bone marrow strongly binds a self-antigen. Which process can change its specificity before deletion?",
    "options": {
      "A": "Classical complement activation by C1q under the conditions described",
      "B": "Receptor editing through light-chain rearrangement",
      "C": "Isotype switching from IgM to IgG under the conditions described",
      "D": "Somatic hypermutation outside a germinal center under the conditions described"
    },
    "answer": "B",
    "explanation": "Receptor editing gives a self-reactive B cell a chance to replace its light chain. If the new receptor is not self-reactive, the cell may survive. Strongly self-reactive cells that fail editing are often deleted."
  },
  {
    "id": 83,
    "chapter": 9,
    "domain": "adaptive_immunity",
    "question": "Which antibody class is the first to appear in a primary immune response?",
    "options": {
      "A": "IgA secreted into mucosal mucus under the conditions described",
      "B": "IgE bound to tissue mast cells under the conditions described",
      "C": "IgM produced by newly activated B cells",
      "D": "IgG transported across the placenta under the conditions described"
    },
    "answer": "C",
    "explanation": "IgM is the first antibody produced during a primary response. Class switching to IgG, IgA, or IgE occurs later. IgM is effective at complement activation."
  },
  {
    "id": 84,
    "chapter": 9,
    "domain": "adaptive_immunity",
    "question": "Which antibody class is most important in secretions such as saliva and intestinal mucus?",
    "options": {
      "A": "IgM in a pentameric form under the conditions described",
      "B": "Secretory IgA transported across epithelium",
      "C": "IgG bound to FcRn under the conditions described",
      "D": "IgD on naive B cells under the conditions described"
    },
    "answer": "B",
    "explanation": "Secretory IgA is the main mucosal antibody. It neutralizes organisms and toxins without strong inflammation. The secretory component protects it in mucus."
  },
  {
    "id": 85,
    "chapter": 9,
    "domain": "adaptive_immunity",
    "question": "Which process increases the average affinity of antibody during a germinal-center response?",
    "options": {
      "A": "Somatic hypermutation followed by selection of better binders",
      "B": "Removal of all B cells that produce IgG under the conditions described",
      "C": "Loss of the variable region from the antibody under the conditions described",
      "D": "Conversion of B cells into neutrophils under the conditions described"
    },
    "answer": "A",
    "explanation": "Somatic hypermutation introduces changes in the variable region. B cells with stronger binding receive more survival help. This is affinity maturation."
  },
  {
    "id": 86,
    "chapter": 9,
    "domain": "adaptive_immunity",
    "question": "Which enzyme is required for both class switching and somatic hypermutation?",
    "options": {
      "A": "Myeloperoxidase in neutrophil granules",
      "B": "Reverse transcriptase from a retrovirus",
      "C": "Factor D of the alternative complement pathway",
      "D": "Activation-induced cytidine deaminase"
    },
    "answer": "D",
    "explanation": "Activation-induced cytidine deaminase initiates DNA changes needed for both processes. Its deficiency produces a hyper-IgM pattern. T-cell function is typically preserved."
  },
  {
    "id": 87,
    "chapter": 9,
    "domain": "adaptive_immunity",
    "question": "Why do conjugate vaccines improve responses to polysaccharide capsules in infants?",
    "options": {
      "A": "The polysaccharide becomes a live replicating organism",
      "B": "The carrier protein recruits T-cell help for B cells",
      "C": "The vaccine removes the need for any B cells",
      "D": "The carrier protein directly kills bacteria in the bloodstream"
    },
    "answer": "B",
    "explanation": "Polysaccharides alone stimulate weak T-independent responses. Linking them to a carrier protein allows Tfh help. This improves class switching and memory."
  },
  {
    "id": 88,
    "chapter": 9,
    "domain": "adaptive_immunity",
    "question": "Which part of an antibody determines whether it can activate complement or bind an Fc receptor?",
    "options": {
      "A": "The heavy-chain constant region in the Fc portion",
      "B": "The antigen-binding CDR loops under the conditions described",
      "C": "The variable region of the light chain under the conditions described",
      "D": "The J chain within a pentameric molecule under the conditions described"
    },
    "answer": "A",
    "explanation": "The constant region determines antibody class and effector function. The variable region determines antigen specificity. Both parts are needed for effective immunity."
  },
  {
    "id": 89,
    "chapter": 9,
    "domain": "adaptive_immunity",
    "question": "A patient has high IgM and very low IgG, IgA, and IgE with a T-cell signaling defect. Which interaction is most likely impaired?",
    "options": {
      "A": "C3b binding to complement receptor on a phagocyte",
      "B": "MHC class I binding to the CD8 coreceptor",
      "C": "CD40 ligand on T cells engaging CD40 on B cells",
      "D": "IgE binding to a mast-cell Fc receptor"
    },
    "answer": "C",
    "explanation": "CD40 ligand deficiency impairs T-cell help for B cells and macrophages. B cells make IgM but switch poorly. Opportunistic infections can occur because macrophage activation is also impaired."
  },
  {
    "id": 90,
    "chapter": 9,
    "domain": "adaptive_immunity",
    "question": "Which statement best describes avidity?",
    "options": {
      "A": "The strength of one antigen-binding site for one epitope under the conditions described",
      "B": "The rate at which a B cell divides in a germinal center under the conditions described",
      "C": "The ability of an antibody to cross the placenta under the conditions described",
      "D": "Overall binding strength from multiple antigen-antibody interactions"
    },
    "answer": "D",
    "explanation": "Avidity combines multiple binding interactions and can be high for multimeric antibodies such as IgM. Affinity refers to one binding site and one epitope. Both influence protection."
  },
  {
    "id": 91,
    "chapter": 10,
    "domain": "adaptive_immunity",
    "question": "A thymocyte binds self-MHC with intermediate avidity. Which process allows it to survive?",
    "options": {
      "A": "Negative selection in the medulla under the conditions described",
      "B": "Class switching to IgA under the conditions described",
      "C": "Positive selection in the thymic cortex",
      "D": "Complement-mediated lysis under the conditions described"
    },
    "answer": "C",
    "explanation": "Positive selection gives survival signals to thymocytes that can recognize self-MHC. Cells that cannot bind die by neglect. Strong self-reactivity later triggers negative selection."
  },
  {
    "id": 92,
    "chapter": 10,
    "domain": "adaptive_immunity",
    "question": "Which molecule allows medullary thymic epithelial cells to display many tissue-specific self-antigens?",
    "options": {
      "A": "AIRE within thymic epithelial cells",
      "B": "Beta2-microglobulin on red blood cells",
      "C": "CD16 on natural killer cells",
      "D": "Factor H in the complement pathway"
    },
    "answer": "A",
    "explanation": "AIRE promotes expression of tissue-specific antigens in the thymus. Developing T cells are exposed to these antigens and can be deleted if strongly reactive. AIRE deficiency causes autoimmune polyendocrine syndrome type 1."
  },
  {
    "id": 93,
    "chapter": 10,
    "domain": "adaptive_immunity",
    "question": "Which cell type helps maintain tolerance by suppressing other immune responses?",
    "options": {
      "A": "A neutrophil undergoing an oxidative burst",
      "B": "A mast cell releasing histamine",
      "C": "A FOXP3-positive regulatory T cell",
      "D": "A red blood cell carrying oxygen"
    },
    "answer": "C",
    "explanation": "Regulatory T cells suppress autoreactive and excessive immune responses. FOXP3 is a key transcription factor. Their function must be balanced with protective immunity."
  },
  {
    "id": 94,
    "chapter": 10,
    "domain": "adaptive_immunity",
    "question": "A newborn has a small thymus, low calcium, and congenital heart disease. Which developmental disorder fits?",
    "options": {
      "A": "X-linked agammaglobulinemia from a BTK mutation under the conditions described",
      "B": "Chronic granulomatous disease from NADPH oxidase loss under the conditions described",
      "C": "Hereditary angioedema from C1 inhibitor deficiency under the conditions described",
      "D": "DiGeorge syndrome with abnormal pharyngeal pouch development"
    },
    "answer": "D",
    "explanation": "The thymus and parathyroid glands share developmental origins near the pharyngeal pouches. DiGeorge syndrome can affect both and include cardiac defects. The immune defect may be partial or complete."
  },
  {
    "id": 95,
    "chapter": 10,
    "domain": "adaptive_immunity",
    "question": "Which phenotype is most typical of common gamma chain deficiency?",
    "options": {
      "A": "Normal T cells with absent B cells and normal NK cells",
      "B": "Normal T cells with absent neutrophils and monocytes",
      "C": "Normal B cells with absent complement proteins",
      "D": "Absent T cells, present B cells, and absent NK cells"
    },
    "answer": "D",
    "explanation": "IL-7 signaling is needed for T-cell development, and IL-15 signaling is needed for NK development. B-cell numbers are often preserved. Immunoglobulins are low because T-cell help is absent."
  },
  {
    "id": 96,
    "chapter": 10,
    "domain": "adaptive_immunity",
    "question": "Which process removes strongly self-reactive T cells in the thymic medulla?",
    "options": {
      "A": "Negative selection by medullary antigen-presenting cells",
      "B": "Positive selection by cortical epithelial cells under the conditions described",
      "C": "Complement activation by C1q under the conditions described",
      "D": "Class switching in germinal centers under the conditions described"
    },
    "answer": "A",
    "explanation": "Medullary thymic epithelial cells and dendritic cells present self-antigens. Strong TCR signaling triggers apoptosis. This central tolerance step reduces autoimmune risk."
  },
  {
    "id": 97,
    "chapter": 10,
    "domain": "adaptive_immunity",
    "question": "Which coreceptor is matched with MHC class II recognition?",
    "options": {
      "A": "CD4 on helper T cells",
      "B": "CD8 on cytotoxic T cells",
      "C": "CD16 on natural killer cells",
      "D": "CD21 on B cells"
    },
    "answer": "A",
    "explanation": "CD4 binds MHC class II and strengthens recognition by helper T cells. CD8 binds MHC class I. The coreceptor helps determine the functional class of the T-cell response."
  },
  {
    "id": 98,
    "chapter": 10,
    "domain": "adaptive_immunity",
    "question": "Why are live vaccines usually avoided in severe combined immunodeficiency?",
    "options": {
      "A": "The vaccine cannot enter any human cell under the conditions described",
      "B": "The vaccine causes immediate complement deficiency under the conditions described",
      "C": "The weakened organism can cause severe disease without T-cell control",
      "D": "The vaccine removes B cells from the bone marrow under the conditions described"
    },
    "answer": "C",
    "explanation": "Live vaccines contain organisms that can replicate. In severe T-cell deficiency, the weakened organism can cause uncontrolled infection. Inactivated or subunit vaccines are often used when possible."
  },
  {
    "id": 99,
    "chapter": 10,
    "domain": "adaptive_immunity",
    "question": "What is MHC restriction?",
    "options": {
      "A": "The inability of B cells to bind protein antigens under the conditions described",
      "B": "T-cell recognition of peptide on a familiar self-MHC molecule",
      "C": "The requirement that complement bind only bacteria under the conditions described",
      "D": "The loss of all MHC molecules during infection under the conditions described"
    },
    "answer": "B",
    "explanation": "Thymic selection teaches T cells to recognize peptides presented by self-MHC. A foreign peptide is still seen in the groove of the host's MHC. This is why transplantation matching matters."
  },
  {
    "id": 100,
    "chapter": 10,
    "domain": "adaptive_immunity",
    "question": "A thymocyte cannot bind any self-MHC molecule. What is its most likely fate?",
    "options": {
      "A": "Conversion into a memory B cell under the conditions described",
      "B": "Activation of the classical complement pathway under the conditions described",
      "C": "Death by neglect from lack of survival signaling",
      "D": "Differentiation into a neutrophil under the conditions described"
    },
    "answer": "C",
    "explanation": "Positive selection requires at least weak recognition of self-MHC. Without a survival signal, the thymocyte dies by neglect. This removes receptors that cannot see antigen in the host."
  },
  {
    "id": 101,
    "chapter": 11,
    "domain": "adaptive_immunity",
    "question": "Which receptor provides a major costimulatory signal when it binds CD80 or CD86?",
    "options": {
      "A": "CD3 on the T-cell receptor complex",
      "B": "CD16 on the natural killer cell",
      "C": "C3b receptor on the phagocyte",
      "D": "CD28 on the T-cell surface"
    },
    "answer": "D",
    "explanation": "CD28 binding CD80 or CD86 provides signal two for T-cell activation. CTLA-4 later competes for the same ligands and inhibits the response. Costimulation helps distinguish danger from harmless antigen."
  },
  {
    "id": 102,
    "chapter": 11,
    "domain": "adaptive_immunity",
    "question": "A T cell recognizes antigen without costimulation. What is the most likely result?",
    "options": {
      "A": "Anergy with poor future responsiveness",
      "B": "Immediate antibody class switching under the conditions described",
      "C": "Strong complement activation under the conditions described",
      "D": "Differentiation into a neutrophil under the conditions described"
    },
    "answer": "A",
    "explanation": "Signal one without signal two can cause anergy. The T cell survives but responds poorly. This is a safety mechanism against harmless or self-antigens."
  },
  {
    "id": 103,
    "chapter": 11,
    "domain": "adaptive_immunity",
    "question": "Which transcription factor is activated by calcineurin after calcium signaling in T cells?",
    "options": {
      "A": "FOXP3 in regulatory T cells under the conditions described",
      "B": "T-bet in Th1 cells under the conditions described",
      "C": "NFAT after dephosphorylation",
      "D": "GATA3 in Th2 cells under the conditions described"
    },
    "answer": "C",
    "explanation": "Calcium activates calcineurin, which dephosphorylates NFAT. NFAT enters the nucleus and helps turn on IL-2 and other genes. Calcineurin inhibitors block this step."
  },
  {
    "id": 104,
    "chapter": 11,
    "domain": "adaptive_immunity",
    "question": "Which helper T-cell subset specializes in helping B cells within germinal centers?",
    "options": {
      "A": "Th2 cells producing only IL-5 under the conditions described",
      "B": "Regulatory T cells producing IL-10 under the conditions described",
      "C": "T follicular helper cells expressing CXCR5",
      "D": "Cytotoxic T cells producing perforin under the conditions described"
    },
    "answer": "C",
    "explanation": "T follicular helper cells enter B-cell follicles and provide CD40 ligand and cytokines. They support germinal centers, class switching, and affinity maturation. Their help is essential for strong protein antigen responses."
  },
  {
    "id": 105,
    "chapter": 11,
    "domain": "adaptive_immunity",
    "question": "Which cytokine pattern supports Th17 differentiation and neutrophil-rich inflammation?",
    "options": {
      "A": "TGF-beta with IL-6 and IL-23",
      "B": "IL-4 with GATA3 activation under the conditions described",
      "C": "IL-12 with T-bet activation under the conditions described",
      "D": "IL-10 with FOXP3 activation under the conditions described"
    },
    "answer": "A",
    "explanation": "TGF-beta, IL-6, IL-21, and IL-23 promote Th17 cells. IL-17 recruits neutrophils and supports barrier defense. Uncontrolled Th17 inflammation contributes to several chronic diseases."
  },
  {
    "id": 106,
    "chapter": 11,
    "domain": "adaptive_immunity",
    "question": "Which interaction is essential for T-cell help to B cells?",
    "options": {
      "A": "C1q binding the Fc region of IgM under the conditions described",
      "B": "CD40 ligand on T cells binding CD40 on B cells",
      "C": "CD28 binding MHC class I under the conditions described",
      "D": "Perforin binding the B-cell membrane under the conditions described"
    },
    "answer": "B",
    "explanation": "CD40 ligand and CD40 are a central help interaction. They promote B-cell survival, germinal-center entry, and class switching. Defects cause a hyper-IgM pattern with impaired cell-mediated immunity."
  },
  {
    "id": 107,
    "chapter": 11,
    "domain": "adaptive_immunity",
    "question": "Which cytokine is especially important for Th1 immunity and macrophage activation?",
    "options": {
      "A": "IL-4 produced by Th2 cells",
      "B": "IL-5 produced during eosinophil responses",
      "C": "IL-13 produced in allergic inflammation",
      "D": "IFN-gamma produced by Th1 cells"
    },
    "answer": "D",
    "explanation": "IFN-gamma activates macrophages and supports control of intracellular organisms. IL-12 helps create Th1 cells. A failure of this axis increases susceptibility to mycobacteria."
  },
  {
    "id": 108,
    "chapter": 11,
    "domain": "adaptive_immunity",
    "question": "Which inhibitory receptor competes with CD28 for B7 ligands?",
    "options": {
      "A": "CD16 on natural killer cells",
      "B": "C3d receptor on B cells",
      "C": "CTLA-4 on activated T cells",
      "D": "TLR4 on macrophages"
    },
    "answer": "C",
    "explanation": "CTLA-4 binds CD80 and CD86 and delivers inhibitory signals. It limits T-cell activation after the response begins. Checkpoint inhibitors block this brake."
  },
  {
    "id": 109,
    "chapter": 11,
    "domain": "adaptive_immunity",
    "question": "Which process explains why protein antigens produce stronger B-cell memory than pure polysaccharides?",
    "options": {
      "A": "Proteins directly activate complement without any cells under the conditions described",
      "B": "Protein antigens recruit T follicular helper cells and germinal centers",
      "C": "Polysaccharides cannot bind to any B-cell receptor under the conditions described",
      "D": "Proteins prevent B cells from entering the spleen under the conditions described"
    },
    "answer": "B",
    "explanation": "Protein antigens can be processed and presented to helper T cells. Tfh help drives germinal centers and memory. Polysaccharides often produce weaker T-independent responses."
  },
  {
    "id": 110,
    "chapter": 11,
    "domain": "adaptive_immunity",
    "question": "A drug blocks CTLA-4 and releases an inhibitory brake on T cells. Which adverse effect is most consistent with its mechanism?",
    "options": {
      "A": "Immediate loss of all B cells",
      "B": "Direct destruction of bacterial cell walls",
      "C": "Autoimmune inflammation in normal tissues",
      "D": "Complete failure of complement synthesis"
    },
    "answer": "C",
    "explanation": "Checkpoint inhibition can activate T cells that recognize self-antigens. Immune-related colitis, dermatitis, hepatitis, and endocrinopathy can occur. The toxicity reflects the intended mechanism."
  },
  {
    "id": 111,
    "chapter": 12,
    "domain": "adaptive_immunity",
    "question": "A vaccinated person has low serum antibody years later but responds quickly after exposure. What explains protection?",
    "options": {
      "A": "Persistent live virus in the bloodstream under the conditions described",
      "B": "Memory B and T cells producing an anamnestic response",
      "C": "Permanent high-level complement activation under the conditions described",
      "D": "Loss of all antigen-specific immune cells under the conditions described"
    },
    "answer": "B",
    "explanation": "Memory B and T cells can respond faster and more strongly than naive cells. Antibody may rise quickly after exposure. The pre-exposure level does not always capture the full protective capacity."
  },
  {
    "id": 112,
    "chapter": 12,
    "domain": "adaptive_immunity",
    "question": "Which feature distinguishes a secondary antibody response from a primary response?",
    "options": {
      "A": "It appears faster with higher and more class-switched antibody",
      "B": "It is slower and produces only IgM under the conditions described",
      "C": "It requires no B or T cells under the conditions described in the clinical setting described",
      "D": "It always produces allergy rather than immunity under the conditions described"
    },
    "answer": "A",
    "explanation": "Memory B cells respond quickly and produce higher-affinity class-switched antibody. Memory T cells provide help sooner. This is the core advantage of vaccination."
  },
  {
    "id": 113,
    "chapter": 12,
    "domain": "adaptive_immunity",
    "question": "Which vaccine type contains a weakened organism capable of limited replication?",
    "options": {
      "A": "A toxoid vaccine",
      "B": "A conjugate polysaccharide vaccine",
      "C": "A live attenuated vaccine",
      "D": "An inactivated whole-organism vaccine"
    },
    "answer": "C",
    "explanation": "Live attenuated vaccines can replicate and mimic natural infection. They often produce strong, durable immunity. They are avoided in severe immunodeficiency."
  },
  {
    "id": 114,
    "chapter": 12,
    "domain": "adaptive_immunity",
    "question": "Why is a carrier protein included in a conjugate vaccine?",
    "options": {
      "A": "It kills the pathogen before the vaccine is injected under the conditions described",
      "B": "It removes all need for memory B cells under the conditions described",
      "C": "It provides T-cell help for the polysaccharide response",
      "D": "It prevents antibody from binding the capsule under the conditions described"
    },
    "answer": "C",
    "explanation": "The carrier protein contains peptides that T cells can recognize. Tfh help improves B-cell activation and memory. This is especially important in infants."
  },
  {
    "id": 115,
    "chapter": 12,
    "domain": "adaptive_immunity",
    "question": "What does an adjuvant do in a vaccine?",
    "options": {
      "A": "It strengthens or shapes the immune response",
      "B": "It replaces all antigen with live bacteria",
      "C": "It prevents antigen-presenting cells from maturing",
      "D": "It guarantees that no local reaction occurs"
    },
    "answer": "A",
    "explanation": "Adjuvants can activate innate sensors, create a depot, or alter cytokine signals. They help vaccines produce stronger or better-shaped immunity. They may also increase local reactions."
  },
  {
    "id": 116,
    "chapter": 12,
    "domain": "adaptive_immunity",
    "question": "Which outcome is a correlate of protection?",
    "options": {
      "A": "A random laboratory value unrelated to immunity under the conditions described",
      "B": "The number of doses a clinic has in storage under the conditions described",
      "C": "A measurable immune response associated with lower disease risk",
      "D": "The color of the vaccine packaging under the conditions described"
    },
    "answer": "C",
    "explanation": "A correlate is a marker linked to protection, such as a neutralizing antibody level. It helps guide schedules and evaluate vaccines. The marker may not capture every protective mechanism."
  },
  {
    "id": 117,
    "chapter": 12,
    "domain": "adaptive_immunity",
    "question": "Which statement describes herd immunity?",
    "options": {
      "A": "Every vaccinated person is completely unable to carry any pathogen",
      "B": "A vaccine works only when given to the entire world at once",
      "C": "Immunity passes from a person to a bacterium",
      "D": "Reduced transmission protects some people who are not immune"
    },
    "answer": "D",
    "explanation": "High population immunity can interrupt transmission chains. This indirectly protects people who are susceptible. The threshold depends on the pathogen and population mixing."
  },
  {
    "id": 118,
    "chapter": 12,
    "domain": "adaptive_immunity",
    "question": "Why can a vaccine reduce severe disease without fully preventing infection?",
    "options": {
      "A": "Vaccines only change the color of respiratory mucus under the conditions described",
      "B": "Antibodies always destroy the pathogen before entry under the conditions described",
      "C": "Memory cells can suppress disease after exposure begins",
      "D": "Vaccines eliminate all pathogen reservoirs worldwide under the conditions described"
    },
    "answer": "C",
    "explanation": "Memory responses can limit replication and tissue damage even when infection occurs. A vaccine may lower severe outcomes more than mild infection. Prevention and disease modification are different endpoints."
  },
  {
    "id": 119,
    "chapter": 12,
    "domain": "adaptive_immunity",
    "question": "Which cell type can maintain serum antibody for years by secreting antibody continuously?",
    "options": {
      "A": "A long-lived plasma cell in a bone marrow niche",
      "B": "A naive CD4 T cell in a lymph node under the conditions described",
      "C": "A circulating neutrophil after phagocytosis under the conditions described",
      "D": "An immature dendritic cell in the skin under the conditions described"
    },
    "answer": "A",
    "explanation": "Long-lived plasma cells survive in bone marrow niches and secrete antibody. They help maintain circulating antibody without repeated antigen exposure. Memory B cells provide a separate recall population."
  },
  {
    "id": 120,
    "chapter": 12,
    "domain": "adaptive_immunity",
    "question": "Which booster principle is correct?",
    "options": {
      "A": "Boosters work without any prior immune memory",
      "B": "A later dose can expand and strengthen existing memory",
      "C": "A very early booster always produces stronger memory",
      "D": "Boosters replace the need for antigen-specific B cells"
    },
    "answer": "B",
    "explanation": "Boosters increase antibody and expand memory after the primary response has developed. Interval matters because memory needs time to mature. Schedules are based on trials and immune principles."
  },
  {
    "id": 121,
    "chapter": 13,
    "domain": "humoral_immunity",
    "question": "An antibody binds a bacterial toxin and prevents it from attaching to its host receptor. What is this called?",
    "options": {
      "A": "Complement fixation on a red blood cell",
      "B": "Neutralization of the toxin",
      "C": "Class switching to a new antibody class",
      "D": "Positive selection of a T cell"
    },
    "answer": "B",
    "explanation": "Neutralization blocks a microbe or toxin from interacting with its target. The toxin may still be present, but it cannot cause damage. Opsonization and complement are separate effector functions."
  },
  {
    "id": 122,
    "chapter": 13,
    "domain": "humoral_immunity",
    "question": "Which process makes a bacterium easier for a neutrophil to engulf after antibody coats its surface?",
    "options": {
      "A": "Opsonization through phagocyte Fc receptors",
      "B": "Neutralization of all bacterial DNA",
      "C": "Rearrangement of the neutrophil receptor genes",
      "D": "Loss of the bacterial cell membrane"
    },
    "answer": "A",
    "explanation": "Antibody coating is recognized by Fc receptors on phagocytes. Complement C3b can add another opsonin. Opsonization greatly increases uptake and killing."
  },
  {
    "id": 123,
    "chapter": 13,
    "domain": "humoral_immunity",
    "question": "Which antibody class is transported across mucosal epithelium as secretory IgA?",
    "options": {
      "A": "IgE bound to mast cells under the conditions described",
      "B": "IgA dimer with a secretory component",
      "C": "IgD displayed on naive B cells under the conditions described",
      "D": "IgM in a pentameric complex under the conditions described"
    },
    "answer": "B",
    "explanation": "Polymeric IgA is transported across epithelium by the polymeric immunoglobulin receptor. The secretory component remains attached and protects the antibody. Secretory IgA blocks attachment and traps organisms in mucus."
  },
  {
    "id": 124,
    "chapter": 13,
    "domain": "humoral_immunity",
    "question": "Which receptor transports maternal IgG across the placenta?",
    "options": {
      "A": "The neonatal Fc receptor",
      "B": "The T-cell receptor",
      "C": "Complement receptor type one",
      "D": "The high-affinity IgE receptor"
    },
    "answer": "A",
    "explanation": "FcRn binds IgG and transports it across the placenta. It also protects IgG from degradation. Maternal IgG provides temporary passive immunity to the newborn."
  },
  {
    "id": 125,
    "chapter": 13,
    "domain": "humoral_immunity",
    "question": "Which statement best distinguishes passive from active immunity?",
    "options": {
      "A": "Passive immunity creates long-lasting memory B cells",
      "B": "Passive immunity acts immediately but does not create memory",
      "C": "Active immunity provides immediate antibody without immune memory",
      "D": "Active immunity requires transfer of antibody from another person"
    },
    "answer": "B",
    "explanation": "Passive immunity uses preformed antibody and acts quickly. Protection fades when the antibody is cleared. Active immunity develops after infection or vaccination and can produce memory."
  },
  {
    "id": 126,
    "chapter": 13,
    "domain": "humoral_immunity",
    "question": "Which mechanism allows a virus to escape antibody that was effective against an earlier strain?",
    "options": {
      "A": "Conversion of the antibody into a complement protein under the conditions described",
      "B": "Movement of the virus into the bone marrow stroma under the conditions described",
      "C": "Loss of all MHC molecules from the virus itself under the conditions described",
      "D": "Change in viral surface antigens through mutation or reassortment"
    },
    "answer": "D",
    "explanation": "Antigenic variation changes the surface targets that antibody recognizes. Influenza drift and shift are examples. Immunity to one strain may not fully cover another."
  },
  {
    "id": 127,
    "chapter": 13,
    "domain": "humoral_immunity",
    "question": "A mucosal immune response produces IgA against an intestinal pathogen. Which feature helps return those B cells to the gut?",
    "options": {
      "A": "Homing receptors such as alpha4beta7 integrin",
      "B": "A high-affinity IgE receptor on mast cells under the conditions described",
      "C": "C1q binding to the B-cell surface under the conditions described",
      "D": "Perforin stored in cytotoxic granules under the conditions described"
    },
    "answer": "A",
    "explanation": "Gut-primed lymphocytes express homing molecules that guide them back to intestinal tissue. Alpha4beta7 binds MAdCAM-1 on gut endothelium. This compartmentalization improves local defense."
  },
  {
    "id": 128,
    "chapter": 13,
    "domain": "humoral_immunity",
    "question": "Which statement best explains why IgA usually causes less inflammation than IgG at mucosal surfaces?",
    "options": {
      "A": "IgA cannot bind microbial antigens under the conditions described in the clinical setting described",
      "B": "IgA is produced only by neutrophils under the conditions described in the clinical setting described",
      "C": "IgA avoids strong complement activation and traps microbes in mucus",
      "D": "IgA crosses the placenta and leaves the mucosa under the conditions described"
    },
    "answer": "C",
    "explanation": "Secretory IgA neutralizes and traps organisms with limited complement activation. Strong inflammation at a mucosa would damage the barrier. IgG and IgM can trigger more inflammatory effector functions."
  },
  {
    "id": 129,
    "chapter": 13,
    "domain": "humoral_immunity",
    "question": "A person with no prior varicella immunity is exposed to chickenpox. Why might passive antibody be considered?",
    "options": {
      "A": "It creates permanent memory before the virus enters cells under the conditions described",
      "B": "It replaces the need for any antiviral treatment under the conditions described",
      "C": "It destroys all viruses in the environment under the conditions described",
      "D": "It can provide immediate but temporary antibody protection"
    },
    "answer": "D",
    "explanation": "Passive antibody can act before the person's own adaptive response develops. It does not create lasting memory. The decision depends on timing, risk, and local guidance."
  },
  {
    "id": 130,
    "chapter": 14,
    "domain": "immune_signaling",
    "question": "A cytokine affects several different cell types and produces different outcomes by context. Which property is this?",
    "options": {
      "A": "Specificity of a T-cell receptor",
      "B": "Opsonization",
      "C": "Positive selection",
      "D": "Pleiotropy"
    },
    "answer": "D",
    "explanation": "Pleiotropy means one cytokine has multiple effects. Context, receptor expression, and other signals shape the result. Cytokine networks are therefore complex."
  },
  {
    "id": 131,
    "chapter": 14,
    "domain": "immune_signaling",
    "question": "Which pathway transmits signals from many cytokine receptors to STAT transcription factors?",
    "options": {
      "A": "The JAK-STAT signaling pathway",
      "B": "The classical complement cascade",
      "C": "The T-cell receptor V(D)J recombination pathway",
      "D": "The membrane attack complex pathway"
    },
    "answer": "A",
    "explanation": "JAK kinases phosphorylate STAT proteins after cytokine receptor activation. STATs move to the nucleus and change gene expression. JAK inhibitors block this pathway."
  },
  {
    "id": 132,
    "chapter": 14,
    "domain": "immune_signaling",
    "question": "A patient taking a TNF blocker develops reactivated tuberculosis. Which normal function of TNF was lost?",
    "options": {
      "A": "Maintenance of protective granulomas",
      "B": "Antibody class switching in germinal centers",
      "C": "Formation of the membrane attack complex",
      "D": "Transport of IgG across the placenta"
    },
    "answer": "A",
    "explanation": "TNF helps maintain granuloma structure and macrophage recruitment. Blocking TNF can allow latent mycobacteria to escape control. Screening before treatment reduces this risk."
  },
  {
    "id": 133,
    "chapter": 14,
    "domain": "immune_signaling",
    "question": "Which cytokine is a major stimulus for C-reactive protein and hepcidin production by the liver?",
    "options": {
      "A": "IL-4 from Th2 cells under the conditions described",
      "B": "IL-5 from ILC2 cells under the conditions described",
      "C": "IL-6 from macrophages and other cells",
      "D": "TGF-beta from regulatory cells under the conditions described"
    },
    "answer": "C",
    "explanation": "IL-6 drives hepatic acute-phase protein production. CRP is a useful inflammatory marker, and hepcidin reduces iron availability. IL-6 blockade can suppress these effects."
  },
  {
    "id": 134,
    "chapter": 14,
    "domain": "immune_signaling",
    "question": "Which chemokine primarily attracts neutrophils to an infected tissue?",
    "options": {
      "A": "CCL19 within lymph nodes",
      "B": "TGF-beta from repairing tissue",
      "C": "IL-10 from regulatory cells",
      "D": "CXCL8, also called IL-8"
    },
    "answer": "D",
    "explanation": "CXCL8 attracts neutrophils through CXCR1 and CXCR2. Other chemokines direct monocytes or lymphocytes. Chemokine gradients organize leukocyte traffic."
  },
  {
    "id": 135,
    "chapter": 14,
    "domain": "immune_signaling",
    "question": "Which cytokine is especially important for making neighboring cells resistant to viral replication?",
    "options": {
      "A": "IL-1 acting on the hypothalamus",
      "B": "Type I interferon",
      "C": "IL-5 recruiting eosinophils",
      "D": "TNF activating endothelium"
    },
    "answer": "B",
    "explanation": "Type I interferons induce antiviral proteins and increase immune visibility of infection. They also activate NK cells. Excessive interferon signaling can contribute to autoimmunity."
  },
  {
    "id": 136,
    "chapter": 14,
    "domain": "immune_signaling",
    "question": "A patient with severe infection develops fever, hypotension, and organ dysfunction. Which description best fits sepsis?",
    "options": {
      "A": "A condition defined only by a positive blood culture under the conditions described",
      "B": "A local infection confined to one tissue under the conditions described in the clinical setting described",
      "C": "A dysregulated host response causing life-threatening organ dysfunction",
      "D": "A fever caused only by bacterial toxins without immune signaling under the conditions described"
    },
    "answer": "C",
    "explanation": "Sepsis is organ dysfunction from a dysregulated response to infection. Blood cultures may be negative. Inflammation, coagulation, endothelial injury, and organ function all contribute."
  },
  {
    "id": 137,
    "chapter": 14,
    "domain": "immune_signaling",
    "question": "Which cytokine is most directly responsible for activating macrophages in a Th1 response?",
    "options": {
      "A": "IFN-gamma from Th1 and NK cells",
      "B": "IL-4 from Th2 cells under the conditions described",
      "C": "IL-13 from ILC2 cells under the conditions described",
      "D": "IL-10 from regulatory cells under the conditions described"
    },
    "answer": "A",
    "explanation": "IFN-gamma activates macrophage antimicrobial programs. Th1 cells and NK cells are major sources. Defects in this pathway increase mycobacterial susceptibility."
  },
  {
    "id": 138,
    "chapter": 14,
    "domain": "immune_signaling",
    "question": "Why can cytokine blockade improve disease while increasing infection risk?",
    "options": {
      "A": "Cytokines are unrelated to either inflammation or infection under the conditions described",
      "B": "Cytokine blockers directly kill all pathogens at high doses under the conditions described",
      "C": "The same cytokine may drive inflammation and support antimicrobial defense",
      "D": "Cytokines are produced only by pathogens under the conditions described in the clinical setting described"
    },
    "answer": "C",
    "explanation": "Cytokines have normal protective roles as well as harmful roles in disease. Blocking them can reduce tissue injury but weaken host defense. The balance depends on the patient and infection."
  },
  {
    "id": 139,
    "chapter": 15,
    "domain": "immune_regulation",
    "question": "A mature T cell recognizes self-antigen without costimulation. What is the likely outcome?",
    "options": {
      "A": "Immediate positive selection under the conditions described",
      "B": "Class switching to IgA under the conditions described",
      "C": "Anergy and poor responsiveness",
      "D": "Complement-mediated lysis under the conditions described"
    },
    "answer": "C",
    "explanation": "Antigen recognition without adequate costimulation can induce anergy. The T cell survives but responds poorly. This limits responses to harmless self-antigens."
  },
  {
    "id": 140,
    "chapter": 15,
    "domain": "immune_regulation",
    "question": "Which transcription factor is central to regulatory T-cell development and function?",
    "options": {
      "A": "T-bet in Th1 cells under the conditions described",
      "B": "GATA3 in Th2 cells under the conditions described",
      "C": "FOXP3 in regulatory T cells",
      "D": "ROR gamma t in Th17 cells under the conditions described"
    },
    "answer": "C",
    "explanation": "FOXP3 is the key regulatory T-cell transcription factor. Its loss causes severe immune dysregulation. Tregs suppress autoreactive and excessive inflammatory responses."
  },
  {
    "id": 141,
    "chapter": 15,
    "domain": "immune_regulation",
    "question": "Which receptor competes with CD28 and helps stop T-cell activation?",
    "options": {
      "A": "CD16 on natural killer cells",
      "B": "CTLA-4 on activated T cells",
      "C": "C3d receptor on B cells",
      "D": "TLR4 on macrophages"
    },
    "answer": "B",
    "explanation": "CTLA-4 binds CD80 and CD86 and delivers an inhibitory signal. It limits the duration and strength of T-cell activation. Checkpoint inhibitors target this brake."
  },
  {
    "id": 142,
    "chapter": 15,
    "domain": "immune_regulation",
    "question": "A microbial peptide resembles a self-peptide, and the immune response cross-reacts with tissue. Which mechanism is this?",
    "options": {
      "A": "Complement amplification",
      "B": "Isotype switching",
      "C": "Opsonization",
      "D": "Molecular mimicry"
    },
    "answer": "D",
    "explanation": "Molecular mimicry occurs when an immune response to a microbe also recognizes a similar self-antigen. Tissue damage may follow. Genetic susceptibility and inflammation influence whether disease develops."
  },
  {
    "id": 143,
    "chapter": 15,
    "domain": "immune_regulation",
    "question": "Which cells are especially important for suppressing immune responses to food antigens in the gut?",
    "options": {
      "A": "Cytotoxic CD8 cells that kill intestinal epithelial cells",
      "B": "Neutrophils that release antimicrobial granules",
      "C": "Eosinophils that release major basic protein",
      "D": "Regulatory T cells that produce IL-10 and TGF-beta"
    },
    "answer": "D",
    "explanation": "Regulatory T cells and tolerogenic antigen-presenting cells support oral tolerance. They limit inflammatory responses to harmless food proteins. Loss of this balance can contribute to food allergy or inflammatory disease."
  },
  {
    "id": 144,
    "chapter": 15,
    "domain": "immune_regulation",
    "question": "Which immune toxicity is most consistent with checkpoint inhibitor therapy?",
    "options": {
      "A": "Immediate ABO transfusion hemolysis under the conditions described",
      "B": "Absence of all antibodies from birth under the conditions described",
      "C": "Loss of complement C3 from the bloodstream under the conditions described",
      "D": "Immune-mediated colitis from activated T cells"
    },
    "answer": "D",
    "explanation": "Checkpoint inhibitors release inhibitory brakes and can activate self-reactive T cells. The colon, skin, liver, and endocrine organs are common targets. Treatment involves immune suppression and may require stopping the drug."
  },
  {
    "id": 145,
    "chapter": 15,
    "domain": "immune_regulation",
    "question": "Which process broadens an autoimmune response as tissue damage releases new self-antigens?",
    "options": {
      "A": "Neutralization of autoantibodies by vaccine antigen",
      "B": "Positive selection of B cells in the thymus",
      "C": "Epitope spreading to additional self-proteins",
      "D": "Conversion of self-peptides into microbial antigens"
    },
    "answer": "C",
    "explanation": "Tissue injury can release proteins that were previously hidden from the immune system. The response can expand to new epitopes. This makes chronic autoimmune disease harder to control."
  },
  {
    "id": 146,
    "chapter": 15,
    "domain": "immune_regulation",
    "question": "Which process removes strongly self-reactive T cells during thymic development?",
    "options": {
      "A": "Class switching in germinal centers",
      "B": "Negative selection in the thymic medulla",
      "C": "Complement-mediated opsonization",
      "D": "Antibody-dependent cellular cytotoxicity"
    },
    "answer": "B",
    "explanation": "Negative selection deletes thymocytes that bind self-peptide-MHC too strongly. AIRE helps expose tissue-specific antigens. Defects in this process increase autoimmune risk."
  },
  {
    "id": 147,
    "chapter": 15,
    "domain": "immune_regulation",
    "question": "Why can a tumor benefit from the same inhibitory pathways that prevent autoimmunity?",
    "options": {
      "A": "Tumors produce complement that destroys all T cells under the conditions described",
      "B": "Tumors lack MHC molecules and therefore cannot be recognized under the conditions described",
      "C": "Inhibitory pathways convert T cells into neutrophils under the conditions described",
      "D": "Tumor cells can engage inhibitory receptors and suppress antitumor T cells"
    },
    "answer": "D",
    "explanation": "Tumors may express inhibitory ligands that engage CTLA-4, PD-1, or other receptors. This reduces antitumor T-cell activity. Checkpoint therapy aims to interrupt that suppression."
  },
  {
    "id": 148,
    "chapter": 16,
    "domain": "immune_pathology",
    "question": "A patient develops hives, wheezing, and hypotension minutes after an allergen exposure. Which mechanism is most likely?",
    "options": {
      "A": "T-cell-mediated killing of skin keratinocytes under the conditions described",
      "B": "Antibody binding to basement membrane in the kidney under the conditions described",
      "C": "Immune-complex deposition in small blood vessels under the conditions described",
      "D": "IgE crosslinking on mast cells causing systemic degranulation"
    },
    "answer": "D",
    "explanation": "This is anaphylaxis, a severe type I IgE-mediated reaction. Mast cells release histamine and other mediators. Epinephrine is the first-line emergency treatment."
  },
  {
    "id": 149,
    "chapter": 16,
    "domain": "immune_pathology",
    "question": "Which immune mechanism causes poison ivy contact dermatitis?",
    "options": {
      "A": "IgE-mediated mast-cell activation",
      "B": "Delayed T-cell-mediated hypersensitivity",
      "C": "Complement-mediated red-cell lysis",
      "D": "Antibody stimulation of hormone receptors"
    },
    "answer": "B",
    "explanation": "Contact dermatitis is a type IV T-cell-mediated reaction. Symptoms develop after a delay as T cells recruit inflammatory cells. The pattern fits a delayed hypersensitivity response."
  },
  {
    "id": 150,
    "chapter": 16,
    "domain": "immune_pathology",
    "question": "Antibody binds basement membrane antigens in the kidney and lung. Which hypersensitivity type is this?",
    "options": {
      "A": "Type I immediate allergy under the conditions described",
      "B": "Type IV delayed hypersensitivity under the conditions described",
      "C": "Type III immune-complex deposition under the conditions described",
      "D": "Type II antibody against fixed tissue antigens"
    },
    "answer": "D",
    "explanation": "Type II reactions involve antibody against antigens on cells or extracellular tissue. Complement and inflammatory cells can then cause damage. Goodpasture disease is an example."
  },
  {
    "id": 151,
    "chapter": 16,
    "domain": "immune_pathology",
    "question": "A patient develops fever, rash, joint pain, and kidney inflammation days after exposure to a foreign protein. Which mechanism fits?",
    "options": {
      "A": "Immediate IgE crosslinking on mast cells",
      "B": "Direct cytolysis by natural killer cells only",
      "C": "Loss of all antibodies after complement consumption",
      "D": "Immune-complex deposition and complement activation"
    },
    "answer": "D",
    "explanation": "Serum sickness is a type III immune-complex reaction. Complexes deposit in tissues and activate complement. Timing after antigen exposure and antibody formation is characteristic."
  },
  {
    "id": 152,
    "chapter": 16,
    "domain": "immune_pathology",
    "question": "Which drug reaction is handled as a T-cell-mediated hypersensitivity emergency?",
    "options": {
      "A": "A mild local reaction at an injection site under the conditions described",
      "B": "Stevens-Johnson syndrome with widespread skin detachment",
      "C": "A transient fever after a killed vaccine under the conditions described",
      "D": "A positive tuberculin skin test under the conditions described"
    },
    "answer": "B",
    "explanation": "Stevens-Johnson syndrome and toxic epidermal necrolysis are severe T-cell-mediated drug reactions. The drug must be stopped and urgent supportive care provided. Mucosal and skin involvement can be extensive."
  },
  {
    "id": 153,
    "chapter": 16,
    "domain": "immune_pathology",
    "question": "Which antibody is responsible for arming mast cells in type I allergy?",
    "options": {
      "A": "IgG transported across the placenta under the conditions described",
      "B": "IgM forming a pentamer in blood under the conditions described",
      "C": "IgE bound to high-affinity Fc receptors",
      "D": "IgA secreted into intestinal mucus under the conditions described"
    },
    "answer": "C",
    "explanation": "Allergen-specific IgE binds high-affinity receptors on mast cells and basophils. Re-exposure crosslinks the IgE and triggers degranulation. The reaction begins within minutes."
  },
  {
    "id": 154,
    "chapter": 16,
    "domain": "immune_pathology",
    "question": "Which test result indicates sensitization but not automatically clinical allergy?",
    "options": {
      "A": "Hypotension after an allergen exposure under the conditions described",
      "B": "Wheezing that begins minutes after a food challenge under the conditions described",
      "C": "Hives that recur with every known exposure under the conditions described",
      "D": "A positive specific IgE test with no symptoms after exposure"
    },
    "answer": "D",
    "explanation": "Sensitization means allergen-specific IgE is present. Allergy requires symptoms with exposure. Tests must be interpreted with the clinical history."
  },
  {
    "id": 155,
    "chapter": 16,
    "domain": "immune_pathology",
    "question": "Why is epinephrine preferred over antihistamines for anaphylaxis?",
    "options": {
      "A": "It reverses vasodilation, edema, and bronchospasm quickly",
      "B": "It creates permanent immune memory against the allergen under the conditions described",
      "C": "It blocks every antibody from binding the allergen under the conditions described",
      "D": "It replaces the need for oxygen or fluids under the conditions described"
    },
    "answer": "A",
    "explanation": "Epinephrine supports blood pressure and opens the airway. It reduces mast-cell mediator release and mucosal edema. Antihistamines do not reverse airway or circulatory collapse."
  },
  {
    "id": 156,
    "chapter": 16,
    "domain": "immune_pathology",
    "question": "Which cell type mediates the delayed response in a tuberculin skin test?",
    "options": {
      "A": "Mast cells that release histamine immediately",
      "B": "Memory T cells that recruit macrophages",
      "C": "Red blood cells that bind complement",
      "D": "Platelets that form a thrombus"
    },
    "answer": "B",
    "explanation": "Prior sensitization creates memory T cells. On challenge, these cells release cytokines and recruit macrophages. Induration develops over 24 to 72 hours."
  },
  {
    "id": 157,
    "chapter": 17,
    "domain": "immune_pathology",
    "question": "A patient has anti-double-stranded DNA antibodies, low complement, rash, arthritis, and kidney disease. Which diagnosis fits best?",
    "options": {
      "A": "Selective IgA deficiency",
      "B": "Hereditary angioedema",
      "C": "Systemic lupus erythematosus",
      "D": "Chronic granulomatous disease"
    },
    "answer": "C",
    "explanation": "The combination suggests lupus with immune-complex disease. Anti-double-stranded DNA is relatively specific, and complement can fall during active disease. Kidney biopsy helps classify nephritis."
  },
  {
    "id": 158,
    "chapter": 17,
    "domain": "immune_pathology",
    "question": "Antibodies stimulate the thyroid-stimulating hormone receptor and cause hyperthyroidism. Which mechanism is this?",
    "options": {
      "A": "Type I IgE-mediated allergy under the conditions described",
      "B": "Type II receptor-stimulating autoantibody disease",
      "C": "Type III immune-complex deposition under the conditions described",
      "D": "Type IV delayed T-cell hypersensitivity under the conditions described"
    },
    "answer": "B",
    "explanation": "Graves disease is caused by stimulating antibodies against the TSH receptor. The antibody mimics hormone action. This is a type II hypersensitivity mechanism."
  },
  {
    "id": 159,
    "chapter": 17,
    "domain": "immune_pathology",
    "question": "Which mechanism contributes to autoimmune disease when a microbial antigen resembles a self-antigen?",
    "options": {
      "A": "Molecular mimicry with cross-reactive immune responses",
      "B": "Complement deficiency without immune activation under the conditions described",
      "C": "Loss of all plasma cells under the conditions described",
      "D": "Direct viral destruction of the thymus under the conditions described"
    },
    "answer": "A",
    "explanation": "Molecular mimicry can lead to antibodies or T cells that recognize both microbial and self-antigens. Tissue damage may follow. Most cross-reactive responses do not cause disease."
  },
  {
    "id": 160,
    "chapter": 17,
    "domain": "immune_pathology",
    "question": "A patient has fluctuating weakness that worsens with use and antibodies against the acetylcholine receptor. Which disease fits?",
    "options": {
      "A": "Rheumatoid arthritis",
      "B": "Myasthenia gravis",
      "C": "Type 1 diabetes",
      "D": "Systemic sclerosis"
    },
    "answer": "B",
    "explanation": "Acetylcholine receptor antibodies impair neuromuscular transmission. The result is fatigable weakness. Treatment may include acetylcholinesterase inhibitors, immune therapy, and thymectomy."
  },
  {
    "id": 161,
    "chapter": 17,
    "domain": "immune_pathology",
    "question": "Which autoantibody is relatively specific for systemic lupus erythematosus?",
    "options": {
      "A": "Rheumatoid factor under the conditions described",
      "B": "Anti-streptolysin O under the conditions described",
      "C": "Anti-double-stranded DNA",
      "D": "Anti-IgA antibody under the conditions described"
    },
    "answer": "C",
    "explanation": "Anti-double-stranded DNA is relatively specific for lupus and may correlate with kidney activity. Antinuclear antibody is sensitive but less specific. Clinical findings remain essential."
  },
  {
    "id": 162,
    "chapter": 17,
    "domain": "immune_pathology",
    "question": "Which process describes immune-complex disease in the kidney?",
    "options": {
      "A": "Antigen-antibody complexes deposit and activate complement",
      "B": "Antibody binds a cell receptor and stimulates hormone production",
      "C": "IgE triggers mast-cell degranulation in the glomerulus",
      "D": "T cells directly kill all glomerular endothelial cells"
    },
    "answer": "A",
    "explanation": "Immune complexes can deposit in glomeruli and activate complement. Neutrophils and inflammatory cells then cause injury. The organism or autoantigen may be elsewhere in the body."
  },
  {
    "id": 163,
    "chapter": 17,
    "domain": "immune_pathology",
    "question": "Why are biologic drugs used in autoimmune disease associated with infection risk?",
    "options": {
      "A": "They block cytokines or cells that also help control infection",
      "B": "They replace protective antibodies with bacterial proteins under the conditions described",
      "C": "They activate complement only in healthy tissue under the conditions described",
      "D": "They prevent all white cells from leaving bone marrow under the conditions described"
    },
    "answer": "A",
    "explanation": "Many autoimmune therapies target molecules or cells used in normal host defense. TNF blockade can reactivate tuberculosis, and B-cell depletion impairs antibody responses. Screening and monitoring reduce risk."
  },
  {
    "id": 164,
    "chapter": 17,
    "domain": "immune_pathology",
    "question": "Which antibody is commonly associated with rheumatoid arthritis?",
    "options": {
      "A": "Anti-nuclear membrane antibody only",
      "B": "Anti-citrullinated protein antibody",
      "C": "Anti-IgE blocking antibody",
      "D": "Anti-ABO blood group antibody"
    },
    "answer": "B",
    "explanation": "Anti-citrullinated protein antibodies support the diagnosis of rheumatoid arthritis. Rheumatoid factor is also common but less specific. Clinical joint involvement is required."
  },
  {
    "id": 165,
    "chapter": 17,
    "domain": "immune_pathology",
    "question": "Which type of tissue injury is most characteristic of lupus nephritis?",
    "options": {
      "A": "Direct killing of glomeruli by neutrophils alone under the conditions described",
      "B": "IgE-mediated mast-cell degranulation in the kidney under the conditions described",
      "C": "Obstruction of the ureter by a fungal ball under the conditions described",
      "D": "Immune-complex deposition with complement activation"
    },
    "answer": "D",
    "explanation": "Lupus nephritis is driven by immune complexes and complement. The pattern on biopsy guides treatment. The severity can range from mild mesangial disease to diffuse proliferative nephritis."
  },
  {
    "id": 166,
    "chapter": 18,
    "domain": "immune_deficiency",
    "question": "A patient has recurrent sinopulmonary infections with encapsulated bacteria and very low immunoglobulin levels. Which defect is most likely?",
    "options": {
      "A": "A terminal complement defect only",
      "B": "A neutrophil oxidative burst defect",
      "C": "An antibody or B-cell deficiency",
      "D": "An isolated skin barrier defect"
    },
    "answer": "C",
    "explanation": "Antibody deficiency classically causes recurrent sinopulmonary infection with encapsulated bacteria. Immunoglobulins and vaccine responses help confirm the diagnosis. T-cell and phagocyte tests may be normal."
  },
  {
    "id": 167,
    "chapter": 18,
    "domain": "immune_deficiency",
    "question": "A boy has absent B cells, very low immunoglobulins, and recurrent bacterial infections after maternal antibody fades. Which disorder fits?",
    "options": {
      "A": "X-linked agammaglobulinemia",
      "B": "Terminal complement deficiency",
      "C": "Chronic granulomatous disease",
      "D": "Selective IgA deficiency"
    },
    "answer": "A",
    "explanation": "BTK mutations block B-cell development and cause X-linked agammaglobulinemia. Maternal IgG protects early in life, then infections emerge as it fades. Immunoglobulin replacement is the main preventive therapy."
  },
  {
    "id": 168,
    "chapter": 18,
    "domain": "immune_deficiency",
    "question": "An infant has severe viral, fungal, and opportunistic infections with very low T-cell numbers. Which diagnosis must be considered urgently?",
    "options": {
      "A": "A complement regulatory disorder",
      "B": "A localized skin infection",
      "C": "Severe combined immunodeficiency",
      "D": "Asymptomatic bacteriuria"
    },
    "answer": "C",
    "explanation": "Severe combined immunodeficiency presents with profound T-cell dysfunction and opportunistic infection. Live vaccines are contraindicated. Early immune reconstitution is critical."
  },
  {
    "id": 169,
    "chapter": 18,
    "domain": "immune_deficiency",
    "question": "Which immune defect is most consistent with recurrent Neisseria infection?",
    "options": {
      "A": "Deficiency of the common gamma chain",
      "B": "Absence of splenic marginal zone B cells",
      "C": "NADPH oxidase deficiency",
      "D": "Terminal complement deficiency"
    },
    "answer": "D",
    "explanation": "Terminal complement forms the membrane attack complex. Neisseria species are especially susceptible to this mechanism. Vaccination and early treatment are important."
  },
  {
    "id": 170,
    "chapter": 18,
    "domain": "immune_deficiency",
    "question": "A patient has a low neutrophil count after chemotherapy. Which infection pattern is most likely?",
    "options": {
      "A": "Only terminal complement deficiency patterns under the conditions described",
      "B": "Isolated recurrent viral meningitis under the conditions described",
      "C": "Bacterial and fungal infections with rapid progression",
      "D": "Recurrent IgE-mediated anaphylaxis under the conditions described"
    },
    "answer": "C",
    "explanation": "Neutropenia impairs bacterial and fungal clearance. Fever can be the first sign of severe infection. Empiric treatment is urgent when neutropenic fever occurs."
  },
  {
    "id": 171,
    "chapter": 18,
    "domain": "immune_deficiency",
    "question": "A patient without a spleen develops overwhelming pneumococcal sepsis. Which defense was most directly lost?",
    "options": {
      "A": "Thymic negative selection of T cells under the conditions described",
      "B": "Splenic clearance of encapsulated blood-borne bacteria",
      "C": "Production of all complement proteins by the liver under the conditions described",
      "D": "Formation of the membrane attack complex in plasma under the conditions described"
    },
    "answer": "B",
    "explanation": "The spleen clears encapsulated organisms and supports marginal-zone B-cell responses. Asplenic patients need vaccination and urgent fever evaluation. Howell-Jolly bodies may indicate splenic loss."
  },
  {
    "id": 172,
    "chapter": 18,
    "domain": "immune_deficiency",
    "question": "A patient taking a TNF blocker develops reactivated tuberculosis. Which principle explains the risk?",
    "options": {
      "A": "TNF has no role in immune defense",
      "B": "The drug directly infects macrophages with mycobacteria",
      "C": "TNF blockade impairs granuloma maintenance",
      "D": "The drug removes all B cells from blood"
    },
    "answer": "C",
    "explanation": "TNF helps maintain granulomas and recruit immune cells. Blocking it can allow latent tuberculosis to reactivate. Screening before TNF blockade is a standard prevention step."
  },
  {
    "id": 173,
    "chapter": 18,
    "domain": "immune_deficiency",
    "question": "Which infection is especially concerning in a patient with advanced untreated HIV?",
    "options": {
      "A": "Immediate ABO hemolysis from HIV under the conditions described",
      "B": "Pneumocystis pneumonia with low CD4 count",
      "C": "Reactivation of tetanus spores in blood under the conditions described",
      "D": "Allergic rhinitis caused by CD4 loss under the conditions described"
    },
    "answer": "B",
    "explanation": "Advanced HIV causes T-cell deficiency and susceptibility to opportunistic infections. Pneumocystis is a classic example. Prophylaxis and antiretroviral therapy reduce risk."
  },
  {
    "id": 174,
    "chapter": 18,
    "domain": "immune_deficiency",
    "question": "Which vaccine type is usually avoided in severe T-cell immunodeficiency?",
    "options": {
      "A": "A live attenuated vaccine",
      "B": "An inactivated vaccine under the conditions described",
      "C": "A subunit vaccine under the conditions described",
      "D": "A toxoid vaccine under the conditions described"
    },
    "answer": "A",
    "explanation": "Live vaccines contain weakened organisms that can replicate. Severe immunodeficiency can allow uncontrolled infection. Vaccine decisions require specialist guidance."
  },
  {
    "id": 175,
    "chapter": 19,
    "domain": "clinical_immunology",
    "question": "A kidney graft fails within minutes because preformed recipient antibody binds donor endothelium. What type of rejection is this?",
    "options": {
      "A": "Acute cellular rejection",
      "B": "Hyperacute rejection",
      "C": "Chronic allograft dysfunction",
      "D": "Graft-versus-host disease"
    },
    "answer": "B",
    "explanation": "Hyperacute rejection is caused by preformed antibody against donor antigens. Complement and thrombosis destroy the graft quickly. Crossmatching prevents this complication."
  },
  {
    "id": 176,
    "chapter": 19,
    "domain": "clinical_immunology",
    "question": "Which antigen system is the main barrier in solid-organ transplantation?",
    "options": {
      "A": "Bacterial capsular polysaccharides",
      "B": "Human leukocyte antigens",
      "C": "Viral reverse transcriptase enzymes",
      "D": "Serum amyloid A proteins"
    },
    "answer": "B",
    "explanation": "HLA molecules differ among people and are recognized by T cells and antibodies. Matching and crossmatching reduce rejection. Blood-group compatibility is also important."
  },
  {
    "id": 177,
    "chapter": 19,
    "domain": "clinical_immunology",
    "question": "Donor T cells attack recipient skin, bowel, and liver after stem-cell transplantation. What is this complication?",
    "options": {
      "A": "Hyperacute rejection",
      "B": "Transfusion-associated overload",
      "C": "Graft-versus-host disease",
      "D": "Rh immune globulin failure"
    },
    "answer": "C",
    "explanation": "Graft-versus-host disease occurs when donor immune cells recognize recipient tissue as foreign. Skin, gastrointestinal tract, and liver are common targets. Treatment balances immune suppression with infection risk."
  },
  {
    "id": 178,
    "chapter": 19,
    "domain": "clinical_immunology",
    "question": "Which drug class prevents T-cell activation by blocking calcineurin and NFAT signaling?",
    "options": {
      "A": "Beta-lactam antibiotics under the conditions described",
      "B": "Aminoglycoside antibiotics under the conditions described",
      "C": "Calcineurin inhibitors such as tacrolimus",
      "D": "Antifungal polyenes under the conditions described"
    },
    "answer": "C",
    "explanation": "Tacrolimus and cyclosporine inhibit calcineurin and reduce IL-2 production. They are central to transplant immunosuppression. Drug levels are monitored because toxicity and rejection risks are narrow."
  },
  {
    "id": 179,
    "chapter": 19,
    "domain": "clinical_immunology",
    "question": "A patient with type O blood receives type A red cells and develops fever, hypotension, and hemoglobinuria. What is the diagnosis?",
    "options": {
      "A": "Acute hemolytic transfusion reaction",
      "B": "Delayed allergic rhinitis under the conditions described",
      "C": "Graft-versus-host disease under the conditions described",
      "D": "Chronic allograft vasculopathy under the conditions described"
    },
    "answer": "A",
    "explanation": "Preformed anti-A antibody binds donor red cells and activates complement. Intravascular hemolysis and shock can follow. The transfusion must be stopped immediately."
  },
  {
    "id": 180,
    "chapter": 19,
    "domain": "clinical_immunology",
    "question": "Why can previous pregnancy make future transplant matching more difficult?",
    "options": {
      "A": "Exposure to fetal antigens can produce HLA antibodies",
      "B": "Pregnancy removes all HLA molecules from the mother under the conditions described",
      "C": "Pregnancy converts B cells into red blood cells under the conditions described",
      "D": "Fetal antigens prevent complement from working under the conditions described"
    },
    "answer": "A",
    "explanation": "Pregnancy can sensitize a woman to paternal HLA antigens. Antibodies may react with a broad range of donor cells. Crossmatching and antibody screening help assess compatibility."
  },
  {
    "id": 181,
    "chapter": 19,
    "domain": "clinical_immunology",
    "question": "Which complication is caused by donor antibody attacking recipient red cells in hemolytic disease of the newborn?",
    "options": {
      "A": "Maternal T cells entering the fetal thymus under the conditions described",
      "B": "IgG crossing the placenta and hemolyzing fetal cells",
      "C": "Direct bacterial infection of fetal marrow under the conditions described",
      "D": "Complement deficiency in the newborn liver under the conditions described"
    },
    "answer": "B",
    "explanation": "Maternal IgG can cross the placenta and bind fetal red-cell antigens. Coated cells are removed or lysed. Rh immune globulin prevents sensitization in the appropriate setting."
  },
  {
    "id": 182,
    "chapter": 19,
    "domain": "clinical_immunology",
    "question": "Which finding suggests acute T-cell-mediated rejection after kidney transplantation?",
    "options": {
      "A": "A rise in creatinine with biopsy showing T-cell infiltration",
      "B": "Immediate graft thrombosis from preformed antibody under the conditions described",
      "C": "Allergic hives after a blood transfusion under the conditions described",
      "D": "Absent B cells from a BTK mutation under the conditions described"
    },
    "answer": "A",
    "explanation": "Acute cellular rejection can raise creatinine and show lymphocytic infiltration on biopsy. Treatment often includes corticosteroids and adjustment of immunosuppression. Infection prevention remains important."
  },
  {
    "id": 183,
    "chapter": 19,
    "domain": "clinical_immunology",
    "question": "Which blood component contains antibodies that can cause hemolysis if given to an incompatible recipient?",
    "options": {
      "A": "Washed red blood cells from a compatible donor under the conditions described",
      "B": "Plasma from a donor with anti-A or anti-B antibodies",
      "C": "Synthetic crystalloid fluid under the conditions described",
      "D": "Albumin solution without antibodies under the conditions described"
    },
    "answer": "B",
    "explanation": "Plasma contains donor antibodies and has transfusion compatibility rules different from red cells. Incompatible plasma can bind recipient red cells. Blood-bank guidance is essential."
  },
  {
    "id": 184,
    "chapter": 20,
    "domain": "viral_pathogens",
    "question": "Which host receptor is the primary binding target for HIV?",
    "options": {
      "A": "CD4 on helper T cells",
      "B": "CD8 on cytotoxic T cells",
      "C": "CD16 on natural killer cells",
      "D": "CD21 on B cells"
    },
    "answer": "A",
    "explanation": "HIV binds CD4 and then uses a chemokine coreceptor such as CCR5 or CXCR4. CD4 T cells are a major target. The entry mechanism explains selective T-cell depletion."
  },
  {
    "id": 185,
    "chapter": 20,
    "domain": "viral_pathogens",
    "question": "A patient has flu-like symptoms, a high HIV viral load, and a negative early antibody test. Which test can detect acute HIV infection?",
    "options": {
      "A": "HIV nucleic acid testing",
      "B": "A repeat antibody test after five years",
      "C": "A CD8 count alone",
      "D": "A bacterial sputum culture"
    },
    "answer": "A",
    "explanation": "HIV RNA can be detected before antibodies develop. Acute infection is a period of high viral load and transmission risk. A negative early antibody test does not exclude very recent infection."
  },
  {
    "id": 186,
    "chapter": 20,
    "domain": "viral_pathogens",
    "question": "Why is combination antiretroviral therapy necessary for HIV?",
    "options": {
      "A": "One drug always causes immediate kidney failure under the conditions described",
      "B": "HIV cannot replicate inside human cells under the conditions described",
      "C": "The virus has no reverse transcriptase enzyme under the conditions described",
      "D": "Multiple drugs suppress replication and limit resistance"
    },
    "answer": "D",
    "explanation": "HIV mutates rapidly and can become resistant to a single drug. Combination therapy targets several steps and maintains suppression. The goal is durable viral control and immune recovery."
  },
  {
    "id": 187,
    "chapter": 20,
    "domain": "viral_pathogens",
    "question": "Which opportunistic infection becomes a major concern when the CD4 count falls below 200 cells per microliter?",
    "options": {
      "A": "Tetanus from a clean wound",
      "B": "Pneumocystis pneumonia",
      "C": "Streptococcal pharyngitis",
      "D": "A simple allergic rhinitis episode"
    },
    "answer": "B",
    "explanation": "Pneumocystis risk rises with advanced CD4 depletion. Prophylaxis is used when the threshold and clinical context indicate it. Antiretroviral therapy improves CD4 count and reduces risk."
  },
  {
    "id": 188,
    "chapter": 20,
    "domain": "viral_pathogens",
    "question": "Which chemokine receptor is used by many transmitted HIV strains and blocked by maraviroc?",
    "options": {
      "A": "CCR7 on naive T cells under the conditions described",
      "B": "CXCR5 on Tfh cells under the conditions described",
      "C": "CCR5 on CD4 cells and macrophages",
      "D": "CCR9 on gut-homing cells under the conditions described"
    },
    "answer": "C",
    "explanation": "CCR5 is a common HIV coreceptor. Maraviroc blocks CCR5 and prevents entry by CCR5-tropic virus. Coreceptor use can change during infection."
  },
  {
    "id": 189,
    "chapter": 20,
    "domain": "viral_pathogens",
    "question": "Why can a person with HIV who maintains an undetectable viral load have a very low risk of sexual transmission?",
    "options": {
      "A": "The virus is completely eliminated from every cell under the conditions described",
      "B": "The person no longer has any CD4 cells under the conditions described",
      "C": "Effective suppression reduces virus in genital fluids",
      "D": "Antiretroviral drugs sterilize every mucosal surface under the conditions described"
    },
    "answer": "C",
    "explanation": "Durable viral suppression reduces the amount of virus in blood and genital fluids. This lowers transmission risk. The principle depends on maintained suppression and the specific exposure."
  },
  {
    "id": 190,
    "chapter": 20,
    "domain": "viral_pathogens",
    "question": "Which process explains why untreated HIV causes chronic immune activation even when CD4 counts are falling?",
    "options": {
      "A": "Complete absence of viral replication after entry under the conditions described",
      "B": "Loss of all microbial exposure in the gut under the conditions described",
      "C": "Conversion of HIV into a harmless commensal under the conditions described",
      "D": "Persistent viral antigen and microbial translocation"
    },
    "answer": "D",
    "explanation": "Untreated HIV continues to replicate and damages gut lymphoid tissue. Microbial products cross a weakened barrier and stimulate immunity. Chronic activation contributes to complications beyond CD4 loss."
  },
  {
    "id": 191,
    "chapter": 20,
    "domain": "viral_pathogens",
    "question": "A person without HIV takes antiretroviral medicine before a high-risk exposure. What is this strategy called?",
    "options": {
      "A": "Post-exposure prophylaxis",
      "B": "Pre-exposure prophylaxis",
      "C": "Passive immunization with IgG",
      "D": "Treatment as prevention for an established infection"
    },
    "answer": "B",
    "explanation": "PrEP uses antiretroviral medication before exposure to reduce acquisition risk. It requires adherence and regular HIV testing. PEP is used after exposure instead."
  },
  {
    "id": 192,
    "chapter": 20,
    "domain": "viral_pathogens",
    "question": "A patient starting HIV treatment develops worsening inflammation at a site of a previously silent infection. What is the likely explanation?",
    "options": {
      "A": "Immediate hyperacute transplant rejection",
      "B": "A direct drug effect that destroys all CD4 cells",
      "C": "Absence of both innate and adaptive immunity",
      "D": "Immune reconstitution inflammatory syndrome"
    },
    "answer": "D",
    "explanation": "Recovering immunity can respond vigorously to a latent or partially treated infection. This is immune reconstitution inflammatory syndrome. It can reflect recovery rather than treatment failure."
  },
  {
    "id": 193,
    "chapter": 20,
    "domain": "viral_pathogens",
    "question": "Which change in the gut contributes to HIV-associated immune activation?",
    "options": {
      "A": "Increased intact gut barrier with reduced antigen exposure",
      "B": "Complete disappearance of all gut microbiota",
      "C": "Loss of CD4 T cells and microbial translocation",
      "D": "Conversion of intestinal cells into B lymphocytes"
    },
    "answer": "C",
    "explanation": "HIV depletes gut CD4 cells and damages lymphoid tissue. Microbial products can enter the circulation. The resulting immune activation contributes to chronic disease."
  },
  {
    "id": 194,
    "chapter": 21,
    "domain": "viral_pathogens",
    "question": "Which virus property explains why influenza vaccines are updated frequently?",
    "options": {
      "A": "The virus cannot infect human respiratory cells",
      "B": "The virus is transmitted only by blood transfusion",
      "C": "Surface antigens change through drift and shift",
      "D": "The virus has no RNA genome"
    },
    "answer": "C",
    "explanation": "Influenza surface proteins change over time. Drift involves gradual mutations and shift can introduce a major new surface protein. Vaccine updates follow circulating strain changes."
  },
  {
    "id": 195,
    "chapter": 21,
    "domain": "viral_pathogens",
    "question": "An infant has wheezing, rapid breathing, and poor feeding during RSV season. Which diagnosis is most likely?",
    "options": {
      "A": "Hyperacute lung transplant rejection under the conditions described",
      "B": "Bronchiolitis from respiratory syncytial virus",
      "C": "Classical complement deficiency under the conditions described",
      "D": "Terminal ileal obstruction under the conditions described"
    },
    "answer": "B",
    "explanation": "RSV commonly causes bronchiolitis in young infants. Small airways become inflamed and obstructed. Supportive care and monitoring for respiratory failure are central."
  },
  {
    "id": 196,
    "chapter": 21,
    "domain": "viral_pathogens",
    "question": "How can influenza increase the risk of bacterial pneumonia?",
    "options": {
      "A": "It removes all bacteria from the respiratory tract",
      "B": "It prevents neutrophils from responding to bacterial signals",
      "C": "It directly converts pneumococci into viruses",
      "D": "It damages airway epithelium and impairs bacterial clearance"
    },
    "answer": "D",
    "explanation": "Influenza can injure cilia and epithelium and alter mucus and immune responses. Colonizing bacteria can then invade. This is a classic viral-bacterial synergy."
  },
  {
    "id": 197,
    "chapter": 21,
    "domain": "viral_pathogens",
    "question": "Which innate cytokine response helps neighboring respiratory cells resist viral replication?",
    "options": {
      "A": "Type I interferon",
      "B": "IL-4 during a type 2 response",
      "C": "IL-5 recruiting eosinophils",
      "D": "TGF-beta promoting fibrosis"
    },
    "answer": "A",
    "explanation": "Type I interferon induces antiviral proteins and improves immune recognition of infection. It also activates NK cells. Severe disease can still occur despite an active response."
  },
  {
    "id": 198,
    "chapter": 21,
    "domain": "viral_pathogens",
    "question": "Which clinical feature is typical of influenza compared with a mild rhinovirus cold?",
    "options": {
      "A": "Abrupt fever, muscle aches, and cough",
      "B": "Gradual sneezing without systemic symptoms",
      "C": "Isolated skin vesicles on the hands",
      "D": "Painless jaundice without respiratory symptoms"
    },
    "answer": "A",
    "explanation": "Influenza often begins abruptly with systemic symptoms and cough. Rhinovirus more often causes nasal symptoms with less systemic illness. The syndromes overlap."
  },
  {
    "id": 199,
    "chapter": 21,
    "domain": "viral_pathogens",
    "question": "Which antiviral target is used by neuraminidase inhibitors?",
    "options": {
      "A": "The viral reverse transcriptase enzyme",
      "B": "Release of new influenza particles",
      "C": "The host CD4 receptor",
      "D": "The bacterial cell wall"
    },
    "answer": "B",
    "explanation": "Neuraminidase helps new influenza particles leave infected cells. Inhibiting it can reduce spread and illness duration. Early treatment is most useful in high-risk patients."
  },
  {
    "id": 200,
    "chapter": 21,
    "domain": "viral_pathogens",
    "question": "Why can severe viral pneumonia cause hypoxemia even when the immune system is active?",
    "options": {
      "A": "Alveolar inflammation and fluid impair gas exchange",
      "B": "The immune system removes all red blood cells",
      "C": "The virus prevents the lungs from receiving blood",
      "D": "Mucus improves oxygen diffusion across damaged alveoli"
    },
    "answer": "A",
    "explanation": "Inflammation, edema, and cellular debris fill alveoli and impair oxygen movement into blood. Microvascular thrombosis can contribute. Supportive oxygen and ventilation may be needed."
  },
  {
    "id": 201,
    "chapter": 21,
    "domain": "viral_pathogens",
    "question": "Which factor most increases the risk of severe respiratory viral illness?",
    "options": {
      "A": "A prior mild cold without complications under the conditions described",
      "B": "Normal oxygen saturation at baseline under the conditions described",
      "C": "A history of seasonal allergy only under the conditions described",
      "D": "Young age, chronic lung disease, or immune compromise"
    },
    "answer": "D",
    "explanation": "Age, chronic lung disease, pregnancy, and immune compromise increase severe disease risk. The same virus can produce a mild cold in one person and pneumonia in another. Risk guides prevention and early treatment."
  },
  {
    "id": 202,
    "chapter": 22,
    "domain": "viral_pathogens",
    "question": "A patient develops watery diarrhea and vomiting after eating food handled by an ill cook. Which virus is highly contagious?",
    "options": {
      "A": "Hepatitis B virus",
      "B": "Human immunodeficiency virus",
      "C": "Epstein-Barr virus",
      "D": "Norovirus"
    },
    "answer": "D",
    "explanation": "Norovirus spreads easily through food, water, surfaces, and person-to-person contact. It causes acute gastroenteritis. Hand hygiene and appropriate cleaning reduce transmission."
  },
  {
    "id": 203,
    "chapter": 22,
    "domain": "viral_pathogens",
    "question": "Which hepatitis virus can establish chronic infection and is prevented by an effective vaccine?",
    "options": {
      "A": "Hepatitis A virus",
      "B": "Hepatitis B virus",
      "C": "Hepatitis E virus",
      "D": "Norovirus"
    },
    "answer": "B",
    "explanation": "Hepatitis B can become chronic and lead to cirrhosis or liver cancer. Vaccination prevents infection. Hepatitis A and E are usually acute and spread by the fecal-oral route."
  },
  {
    "id": 204,
    "chapter": 22,
    "domain": "viral_pathogens",
    "question": "Which hepatitis virus is especially dangerous during pregnancy and can cause severe maternal disease?",
    "options": {
      "A": "Hepatitis C virus",
      "B": "Hepatitis D virus alone",
      "C": "Rotavirus",
      "D": "Hepatitis E virus"
    },
    "answer": "D",
    "explanation": "Hepatitis E can cause severe disease in pregnancy. It is usually spread by contaminated water. Prevention depends on safe water and sanitation."
  },
  {
    "id": 205,
    "chapter": 22,
    "domain": "viral_pathogens",
    "question": "Which virus requires hepatitis B for replication?",
    "options": {
      "A": "Hepatitis A",
      "B": "Hepatitis C",
      "C": "Hepatitis D",
      "D": "Hepatitis E"
    },
    "answer": "C",
    "explanation": "Hepatitis D uses hepatitis B surface antigen to form infectious particles. Preventing hepatitis B also prevents hepatitis D. Coinfection can cause severe liver disease."
  },
  {
    "id": 206,
    "chapter": 22,
    "domain": "viral_pathogens",
    "question": "Which treatment is most important for a child with acute viral gastroenteritis and dehydration?",
    "options": {
      "A": "Broad antibiotics for every episode under the conditions described",
      "B": "Immediate corticosteroid treatment under the conditions described",
      "C": "A platelet transfusion under the conditions described in the clinical setting described",
      "D": "Oral or intravenous fluid and electrolyte replacement"
    },
    "answer": "D",
    "explanation": "The main danger of acute gastroenteritis is fluid and electrolyte loss. Rehydration saves lives. Antibiotics do not treat viral gastroenteritis."
  },
  {
    "id": 207,
    "chapter": 22,
    "domain": "viral_pathogens",
    "question": "How is hepatitis A mainly transmitted?",
    "options": {
      "A": "Through blood transfusion only",
      "B": "By mosquito bites",
      "C": "Through placental IgG transfer",
      "D": "By the fecal-oral route"
    },
    "answer": "D",
    "explanation": "Hepatitis A spreads through contaminated food, water, and close contact. It usually causes acute hepatitis. Vaccination and sanitation prevent infection."
  },
  {
    "id": 208,
    "chapter": 22,
    "domain": "viral_pathogens",
    "question": "Why do cytotoxic T cells contribute to liver injury in viral hepatitis?",
    "options": {
      "A": "They directly neutralize all viral particles in blood under the conditions described",
      "B": "They convert hepatocytes into red blood cells under the conditions described",
      "C": "They recognize viral peptides on infected hepatocytes and kill them",
      "D": "They produce antibodies against bacterial capsules under the conditions described"
    },
    "answer": "C",
    "explanation": "CD8 T cells recognize viral peptides on MHC class I. They kill infected hepatocytes and release cytokines. This controls the virus but can damage the liver."
  },
  {
    "id": 209,
    "chapter": 22,
    "domain": "viral_pathogens",
    "question": "Which measure most directly prevents fecal-oral transmission of enteric viruses?",
    "options": {
      "A": "Using sunscreen before outdoor activity under the conditions described",
      "B": "Safe water, sanitation, and hand hygiene",
      "C": "Avoiding all vaccines after childhood under the conditions described",
      "D": "Increasing exposure to wild rodents under the conditions described"
    },
    "answer": "B",
    "explanation": "Fecal-oral transmission can be interrupted by safe water, sanitation, and hand hygiene. Food safety and cleaning are also important. These measures prevent exposure before immune defense is needed."
  },
  {
    "id": 210,
    "chapter": 22,
    "domain": "viral_pathogens",
    "question": "A patient with chronic hepatitis C develops cirrhosis. Which long-term complication is most concerning?",
    "options": {
      "A": "Liver cancer and portal hypertension",
      "B": "Immediate hyperacute transplant rejection",
      "C": "Selective IgA deficiency",
      "D": "Terminal complement deficiency"
    },
    "answer": "A",
    "explanation": "Chronic hepatitis C can cause fibrosis, cirrhosis, and liver cancer. Direct-acting antiviral treatment can cure most infections. Liver monitoring remains important after cure if cirrhosis is present."
  },
  {
    "id": 211,
    "chapter": 23,
    "domain": "bacterial_pathogens",
    "question": "A bacterium uses pili to bind bladder epithelium. Which step of pathogenesis is this?",
    "options": {
      "A": "Formation of the membrane attack complex",
      "B": "Antibody class switching",
      "C": "Positive selection of T cells",
      "D": "Adherence to a host surface"
    },
    "answer": "D",
    "explanation": "Pili and other adhesins help bacteria resist being washed away. Attachment is an early step in colonization and infection. The site of attachment influences the syndrome."
  },
  {
    "id": 212,
    "chapter": 23,
    "domain": "bacterial_pathogens",
    "question": "Which bacterial structure most directly protects against phagocytosis and complement?",
    "options": {
      "A": "A bacterial ribosome",
      "B": "A polysaccharide capsule",
      "C": "A plasmid carrying a metabolic gene",
      "D": "A flagellum used for movement"
    },
    "answer": "B",
    "explanation": "Capsules can limit complement deposition and impair phagocyte recognition. Antibody against the capsule improves clearance. Encapsulated organisms are important in bloodstream infection."
  },
  {
    "id": 213,
    "chapter": 23,
    "domain": "bacterial_pathogens",
    "question": "Why are biofilm infections on catheters difficult to cure with antibiotics alone?",
    "options": {
      "A": "Biofilm bacteria have no cell walls or ribosomes under the conditions described",
      "B": "Antibiotics are destroyed by human red blood cells under the conditions described",
      "C": "Biofilm bacteria cannot adhere to medical devices under the conditions described",
      "D": "The matrix and slow growth reduce drug access and killing"
    },
    "answer": "D",
    "explanation": "Biofilm matrix and altered bacterial growth protect organisms from drugs and immune cells. Device removal is often necessary. Source control is more important than simply using another antibiotic."
  },
  {
    "id": 214,
    "chapter": 23,
    "domain": "bacterial_pathogens",
    "question": "Which molecule is an exotoxin that acts as a superantigen?",
    "options": {
      "A": "Toxic shock syndrome toxin from Staphylococcus aureus",
      "B": "Peptidoglycan in a bacterial cell wall under the conditions described",
      "C": "Lipopolysaccharide in a gram-negative membrane under the conditions described",
      "D": "A bacterial capsule polysaccharide under the conditions described"
    },
    "answer": "A",
    "explanation": "Superantigens crosslink MHC class II and T-cell receptors outside the normal peptide groove. They activate many T cells and release large amounts of cytokines. Toxic shock syndrome is an example."
  },
  {
    "id": 215,
    "chapter": 23,
    "domain": "bacterial_pathogens",
    "question": "Which feature is characteristic of lipopolysaccharide from gram-negative bacteria?",
    "options": {
      "A": "It activates TLR4 and can drive systemic inflammation",
      "B": "It forms the bacterial capsule and blocks antibody under the conditions described",
      "C": "It directly rearranges T-cell receptor genes under the conditions described",
      "D": "It is the main target of penicillin in human cells under the conditions described"
    },
    "answer": "A",
    "explanation": "Lipid A is the immune-stimulatory part of lipopolysaccharide. TLR4 signaling produces inflammatory cytokines. Large systemic responses can contribute to shock."
  },
  {
    "id": 216,
    "chapter": 23,
    "domain": "bacterial_pathogens",
    "question": "Which process allows bacteria to coordinate gene expression when their population becomes dense?",
    "options": {
      "A": "Opsonization by C3b",
      "B": "Class switching",
      "C": "Antigen cross-presentation",
      "D": "Quorum sensing"
    },
    "answer": "D",
    "explanation": "Quorum sensing uses small signaling molecules to sense density. Bacteria can then coordinate toxin production or biofilm formation. The response can be useful only when many organisms act together."
  },
  {
    "id": 217,
    "chapter": 23,
    "domain": "bacterial_pathogens",
    "question": "Which bacterial system directly injects effector proteins into host cells?",
    "options": {
      "A": "The host MHC class II pathway",
      "B": "The classical complement pathway",
      "C": "The neonatal Fc receptor pathway",
      "D": "A type III secretion system"
    },
    "answer": "D",
    "explanation": "Type III secretion systems act like molecular syringes. They inject proteins that can alter host signaling or cytoskeleton. Many gram-negative pathogens use this strategy."
  },
  {
    "id": 218,
    "chapter": 23,
    "domain": "bacterial_pathogens",
    "question": "Which nutritional defense limits bacterial growth by reducing available iron?",
    "options": {
      "A": "Increased free transferrin in the bloodstream under the conditions described",
      "B": "Hepcidin-mediated iron restriction during inflammation",
      "C": "Complement-mediated lysis of all bacteria under the conditions described",
      "D": "Class switching to IgE under the conditions described in the clinical setting described"
    },
    "answer": "B",
    "explanation": "IL-6 increases hepcidin, reducing iron absorption and release. Iron restriction can limit microbial growth. It also contributes to anemia of inflammation."
  },
  {
    "id": 219,
    "chapter": 23,
    "domain": "bacterial_pathogens",
    "question": "A patient's wound contains dead tissue and a biofilm. Why is source control essential?",
    "options": {
      "A": "Dead tissue increases antibody production against all bacteria under the conditions described",
      "B": "Dead tissue and biofilm protect bacteria from drugs and immune cells",
      "C": "Biofilm prevents bacteria from adhering to any surface under the conditions described",
      "D": "Source control replaces the need for antibiotics in every infection under the conditions described"
    },
    "answer": "B",
    "explanation": "Necrotic tissue and biofilm create protected niches. Drug delivery and immune access are poor in these areas. Debridement and device removal can be decisive."
  },
  {
    "id": 220,
    "chapter": 24,
    "domain": "bacterial_pathogens",
    "question": "A deep wound infection causes muscle spasms and rigidity. Which toxin is responsible in tetanus?",
    "options": {
      "A": "Tetanospasmin blocking inhibitory neurotransmitter release",
      "B": "Cholera toxin activating adenylate cyclase under the conditions described",
      "C": "Diphtheria toxin inhibiting protein synthesis under the conditions described",
      "D": "Pertussis toxin increasing cAMP in respiratory cells under the conditions described"
    },
    "answer": "A",
    "explanation": "Tetanospasmin blocks inhibitory neurotransmitter release in the central nervous system. Motor neurons fire without normal restraint. The result is rigidity and spasms."
  },
  {
    "id": 221,
    "chapter": 24,
    "domain": "bacterial_pathogens",
    "question": "A patient develops profuse watery diarrhea after exposure to contaminated water. Which toxin mechanism fits cholera?",
    "options": {
      "A": "Blockade of acetylcholine release at the neuromuscular junction under the conditions described",
      "B": "Activation of intestinal adenylate cyclase and chloride secretion",
      "C": "Inhibition of protein synthesis in heart and nerve cells under the conditions described",
      "D": "Direct invasion of red blood cells and lysis under the conditions described"
    },
    "answer": "B",
    "explanation": "Cholera toxin increases cyclic AMP and drives chloride and water secretion. The organism can remain in the intestinal lumen. Fluid and electrolyte replacement is the main treatment."
  },
  {
    "id": 222,
    "chapter": 24,
    "domain": "bacterial_pathogens",
    "question": "Which organism commonly causes a rapidly progressive necrotizing soft-tissue infection with severe pain?",
    "options": {
      "A": "Streptococcus pyogenes",
      "B": "Rotavirus",
      "C": "Cryptococcus neoformans",
      "D": "Pneumocystis jirovecii"
    },
    "answer": "A",
    "explanation": "Group A Streptococcus can cause necrotizing fasciitis and toxic shock. Pain may be out of proportion to early skin findings. Urgent surgery and antibiotics are essential."
  },
  {
    "id": 223,
    "chapter": 24,
    "domain": "bacterial_pathogens",
    "question": "Why does antibiotic treatment alone often fail in an abscess?",
    "options": {
      "A": "Abscesses contain no bacteria after inflammation begins under the conditions described",
      "B": "Antibiotics cannot enter any human tissue under the conditions described",
      "C": "The immune system stops working around a collection of pus under the conditions described",
      "D": "Poor blood flow and pus limit drug delivery, so drainage is needed"
    },
    "answer": "D",
    "explanation": "An abscess is a protected collection of pus, dead tissue, and organisms. Blood flow and drug penetration may be poor. Drainage is a key part of source control."
  },
  {
    "id": 224,
    "chapter": 24,
    "domain": "bacterial_pathogens",
    "question": "Which toxin blocks acetylcholine release and causes descending flaccid paralysis?",
    "options": {
      "A": "Botulinum toxin",
      "B": "Tetanospasmin",
      "C": "Cholera toxin",
      "D": "Toxic shock syndrome toxin"
    },
    "answer": "A",
    "explanation": "Botulinum toxin blocks acetylcholine release at the neuromuscular junction. The result is flaccid paralysis. Supportive ventilation and antitoxin are important in severe disease."
  },
  {
    "id": 225,
    "chapter": 24,
    "domain": "bacterial_pathogens",
    "question": "A patient develops pseudomembranous colitis after broad antibiotics. Which organism fits best?",
    "options": {
      "A": "Clostridium tetani",
      "B": "Corynebacterium diphtheriae",
      "C": "Clostridioides difficile",
      "D": "Vibrio cholerae"
    },
    "answer": "C",
    "explanation": "C. difficile overgrows after normal colonic bacteria are disrupted. Its toxins damage the epithelium and cause colitis. Stopping the triggering antibiotic is important when possible."
  },
  {
    "id": 226,
    "chapter": 24,
    "domain": "bacterial_pathogens",
    "question": "Which disease is prevented by a toxoid vaccine that targets an inactivated bacterial toxin?",
    "options": {
      "A": "Tetanus",
      "B": "Malaria",
      "C": "Candidiasis",
      "D": "Norovirus gastroenteritis"
    },
    "answer": "A",
    "explanation": "Tetanus toxoid stimulates antibody against the toxin. The vaccine prevents disease caused by tetanospasmin. Post-exposure management may also require wound care and antitoxin."
  },
  {
    "id": 227,
    "chapter": 24,
    "domain": "bacterial_pathogens",
    "question": "Which finding is most consistent with streptococcal toxic shock syndrome?",
    "options": {
      "A": "Isolated nasal congestion without fever under the conditions described",
      "B": "A chronic painless skin nodule under the conditions described",
      "C": "Fever, rash, hypotension, and multiorgan involvement",
      "D": "Jaundice without any inflammatory response under the conditions described"
    },
    "answer": "C",
    "explanation": "Superantigen-mediated T-cell activation causes massive cytokine release. Hypotension and organ dysfunction can progress rapidly. Treatment includes antibiotics, source control, and supportive care."
  },
  {
    "id": 228,
    "chapter": 24,
    "domain": "bacterial_pathogens",
    "question": "Why must antibiotics not replace surgery in necrotizing fasciitis?",
    "options": {
      "A": "Antibiotics cannot kill any gram-positive bacteria under the conditions described",
      "B": "Surgery directly produces antibodies against streptococci under the conditions described",
      "C": "Necrotizing infection is caused only by viruses under the conditions described",
      "D": "Dead tissue and poor perfusion prevent effective drug delivery"
    },
    "answer": "D",
    "explanation": "Devitalized tissue and impaired blood flow protect bacteria and limit drug delivery. Urgent debridement removes the source. Antibiotics support but do not replace surgery."
  },
  {
    "id": 229,
    "chapter": 25,
    "domain": "bacterial_pathogens",
    "question": "A patient has a positive interferon-gamma release assay but no symptoms or chest-imaging findings. What does this most likely indicate?",
    "options": {
      "A": "Active contagious pulmonary tuberculosis",
      "B": "Latent tuberculosis infection",
      "C": "Complete absence of T cells",
      "D": "Immediate terminal complement deficiency"
    },
    "answer": "B",
    "explanation": "The test measures immune sensitization to tuberculosis. A positive result with no active disease suggests latent infection. Treatment decisions depend on risk and guidance."
  },
  {
    "id": 230,
    "chapter": 25,
    "domain": "bacterial_pathogens",
    "question": "Which cytokine is especially important for macrophage activation against Mycobacterium tuberculosis?",
    "options": {
      "A": "IL-4 from Th2 cells",
      "B": "IL-5 from ILC2 cells",
      "C": "IgE from allergen-specific B cells",
      "D": "IFN-gamma from Th1 cells"
    },
    "answer": "D",
    "explanation": "IFN-gamma activates macrophages and supports granuloma function. IL-12 helps produce Th1 cells. Defects in this pathway increase mycobacterial susceptibility."
  },
  {
    "id": 231,
    "chapter": 25,
    "domain": "bacterial_pathogens",
    "question": "Why does TNF blockade increase the risk of tuberculosis reactivation?",
    "options": {
      "A": "It directly infects macrophages with mycobacteria",
      "B": "It impairs maintenance of protective granulomas",
      "C": "It prevents all T cells from entering lymph nodes",
      "D": "It removes antibodies against the capsule"
    },
    "answer": "B",
    "explanation": "TNF helps organize and maintain granulomas. Blocking it can release latent organisms. Screening and preventive treatment reduce risk."
  },
  {
    "id": 232,
    "chapter": 25,
    "domain": "bacterial_pathogens",
    "question": "A patient with advanced HIV develops disseminated Mycobacterium avium complex disease. Which immune defect is central?",
    "options": {
      "A": "Absence of terminal complement proteins under the conditions described",
      "B": "Loss of CD4 T-cell help and macrophage activation",
      "C": "Loss of IgE-mediated mast-cell responses under the conditions described",
      "D": "Failure of red-cell production in bone marrow under the conditions described"
    },
    "answer": "B",
    "explanation": "Control of intracellular mycobacteria depends on T-cell help and macrophage activation. CD4 depletion weakens this axis. Antiretroviral therapy and prophylaxis reduce risk."
  },
  {
    "id": 233,
    "chapter": 25,
    "domain": "bacterial_pathogens",
    "question": "Which organism escapes the phagosome and moves between host cells using actin?",
    "options": {
      "A": "Mycobacterium tuberculosis",
      "B": "Vibrio cholerae",
      "C": "Listeria monocytogenes",
      "D": "Cryptococcus neoformans"
    },
    "answer": "C",
    "explanation": "Listeria escapes into the cytosol and polymerizes host actin for cell-to-cell spread. Cell-mediated immunity is important for control. Pregnant and immunocompromised patients are at higher risk."
  },
  {
    "id": 234,
    "chapter": 25,
    "domain": "bacterial_pathogens",
    "question": "Which patient group is especially vulnerable to severe listeriosis?",
    "options": {
      "A": "Healthy young adults without other conditions under the conditions described",
      "B": "People with normal neutrophil and T-cell function under the conditions described",
      "C": "People who have never eaten contaminated food under the conditions described",
      "D": "Pregnant people, newborns, and immunocompromised patients"
    },
    "answer": "D",
    "explanation": "Listeria can cross the placenta and cause severe disease in newborns. Older adults and immunocompromised patients are also vulnerable. Food safety is important during pregnancy."
  },
  {
    "id": 235,
    "chapter": 25,
    "domain": "bacterial_pathogens",
    "question": "Which test can provide early evidence of acid-fast bacilli in sputum but does not identify the species?",
    "options": {
      "A": "T-cell receptor sequencing",
      "B": "Acid-fast smear microscopy",
      "C": "Serum IgE measurement",
      "D": "Dihydrorhodamine testing"
    },
    "answer": "B",
    "explanation": "Acid-fast smear can suggest mycobacteria but does not prove M. tuberculosis. Molecular tests and culture provide identification and susceptibility. Specimen quality matters."
  },
  {
    "id": 236,
    "chapter": 25,
    "domain": "bacterial_pathogens",
    "question": "Which form of leprosy is associated with weak cell-mediated immunity and many organisms?",
    "options": {
      "A": "Tuberculoid leprosy with few organisms under the conditions described",
      "B": "Acute streptococcal pharyngitis under the conditions described",
      "C": "Terminal complement deficiency under the conditions described",
      "D": "Lepromatous leprosy with many organisms"
    },
    "answer": "D",
    "explanation": "Lepromatous leprosy has weak Th1-like immunity and abundant organisms. Tuberculoid disease has stronger cellular responses and fewer organisms. Host immunity shapes the form."
  },
  {
    "id": 237,
    "chapter": 25,
    "domain": "bacterial_pathogens",
    "question": "Why does active tuberculosis treatment use several drugs at once?",
    "options": {
      "A": "Each drug treats a different unrelated virus under the conditions described",
      "B": "Multiple drugs prevent resistant mutants from emerging",
      "C": "One drug cannot enter any human tissue under the conditions described",
      "D": "Combination therapy eliminates the need for adherence under the conditions described"
    },
    "answer": "B",
    "explanation": "Mycobacteria can develop resistance through mutations. Multiple drugs reduce the chance that a resistant subpopulation survives. Adherence and susceptibility testing remain essential."
  },
  {
    "id": 238,
    "chapter": 26,
    "domain": "fungal_pathogens",
    "question": "Which host cell is especially important for controlling invasive molds such as Aspergillus?",
    "options": {
      "A": "Mature red blood cells that carry oxygen",
      "B": "Platelets that form a protective clot",
      "C": "B cells that produce only IgE",
      "D": "Neutrophils that attack fungal hyphae"
    },
    "answer": "D",
    "explanation": "Neutrophils are crucial for defense against molds. Prolonged neutropenia is a major risk for invasive aspergillosis. Macrophages also contribute."
  },
  {
    "id": 239,
    "chapter": 26,
    "domain": "fungal_pathogens",
    "question": "A patient with uncontrolled diabetic ketoacidosis develops sinus pain and a black eschar. Which fungal infection is most concerning?",
    "options": {
      "A": "Mucormycosis with angioinvasion",
      "B": "Allergic bronchopulmonary aspergillosis",
      "C": "Oral candidiasis only",
      "D": "Cryptococcal meningitis without sinus disease"
    },
    "answer": "A",
    "explanation": "Mucormycosis can invade blood vessels and cause rapid tissue necrosis. Uncontrolled diabetes is a major risk. Urgent surgery and antifungal therapy are required."
  },
  {
    "id": 240,
    "chapter": 26,
    "domain": "fungal_pathogens",
    "question": "Which fungal structure helps Cryptococcus impair phagocytosis?",
    "options": {
      "A": "A lipid A endotoxin",
      "B": "A polysaccharide capsule",
      "C": "A peptidoglycan capsule",
      "D": "A flagellum for swimming"
    },
    "answer": "B",
    "explanation": "The Cryptococcus capsule impairs phagocytosis and contributes to disease. Antigen testing can detect capsular material. Meningitis is a major complication in T-cell deficiency."
  },
  {
    "id": 241,
    "chapter": 26,
    "domain": "fungal_pathogens",
    "question": "Which fungal infection is especially associated with advanced HIV and low CD4 counts?",
    "options": {
      "A": "Tetanus",
      "B": "Streptococcal pharyngitis",
      "C": "Pneumocystis pneumonia",
      "D": "Acute hepatitis A"
    },
    "answer": "C",
    "explanation": "Pneumocystis risk rises with severe T-cell deficiency. Advanced HIV is a classic setting. Prophylaxis and antiretroviral therapy reduce risk."
  },
  {
    "id": 242,
    "chapter": 26,
    "domain": "fungal_pathogens",
    "question": "Why can blood cultures be negative in disseminated candidiasis?",
    "options": {
      "A": "Not all infected tissue releases detectable organisms into blood",
      "B": "Candida cannot survive in blood under any condition under the conditions described",
      "C": "The immune system converts Candida into bacteria under the conditions described",
      "D": "Catheters prevent Candida from entering tissue under the conditions described"
    },
    "answer": "A",
    "explanation": "Fungal burden and release into blood vary, so cultures can be negative. Tissue invasion may still be present. Diagnosis can require imaging, biomarkers, and biopsy."
  },
  {
    "id": 243,
    "chapter": 26,
    "domain": "fungal_pathogens",
    "question": "Which antifungal target is found in fungal membranes but differs from human cholesterol?",
    "options": {
      "A": "Ergosterol in the fungal membrane",
      "B": "Peptidoglycan in the fungal wall",
      "C": "Ribosomal RNA in human mitochondria",
      "D": "Lipopolysaccharide in the fungal outer membrane"
    },
    "answer": "A",
    "explanation": "Ergosterol is a fungal membrane sterol. Some antifungals bind or inhibit its synthesis. Human cholesterol is related but different enough for selective toxicity."
  },
  {
    "id": 244,
    "chapter": 26,
    "domain": "fungal_pathogens",
    "question": "A patient with asthma has worsening wheeze, mucus plugging, and an immune response to Aspergillus. Which syndrome fits?",
    "options": {
      "A": "Invasive candidiasis with bloodstream spread",
      "B": "Cryptococcal meningitis",
      "C": "Mucormycosis with blood-vessel invasion",
      "D": "Allergic bronchopulmonary aspergillosis"
    },
    "answer": "D",
    "explanation": "ABPA is an allergic response to Aspergillus in the airways. It causes mucus plugging and airway inflammation. It differs from invasive aspergillosis."
  },
  {
    "id": 245,
    "chapter": 26,
    "domain": "fungal_pathogens",
    "question": "Which immune response pattern supports mucosal defense against Candida?",
    "options": {
      "A": "Th1 and Th17 responses that activate phagocytes and epithelium",
      "B": "Isolation of the fungus in red blood cells under the conditions described",
      "C": "Complete absence of neutrophils from mucosa under the conditions described",
      "D": "Classical complement lysis of every yeast cell under the conditions described"
    },
    "answer": "A",
    "explanation": "Th1 and Th17 pathways support antifungal phagocyte and epithelial defense. Defects can cause chronic mucocutaneous candidiasis. Innate recognition through C-type lectins is also important."
  },
  {
    "id": 246,
    "chapter": 26,
    "domain": "fungal_pathogens",
    "question": "Why is prolonged neutropenia a major risk for invasive Aspergillus?",
    "options": {
      "A": "Neutrophils are the main source of fungal ergosterol",
      "B": "Neutropenia increases antibody class switching",
      "C": "Neutrophils normally help contain fungal hyphae",
      "D": "Neutrophils are required for red-cell oxygen transport"
    },
    "answer": "C",
    "explanation": "Neutrophils attack hyphae and limit tissue invasion. Their absence allows mold growth and angioinvasion. Recovery of neutrophils improves control."
  },
  {
    "id": 247,
    "chapter": 27,
    "domain": "parasitic_pathogens",
    "question": "A traveler develops fever and chills, and a blood smear shows parasites inside red cells. Which infection is most likely?",
    "options": {
      "A": "Hepatitis B from a bloodborne virus",
      "B": "Candidemia from a central line",
      "C": "Tuberculosis from an airborne bacterium",
      "D": "Malaria from Plasmodium species"
    },
    "answer": "D",
    "explanation": "Plasmodium infects red blood cells and causes febrile cycles. Travel history and blood smear are key. Severe malaria requires urgent treatment."
  },
  {
    "id": 248,
    "chapter": 27,
    "domain": "parasitic_pathogens",
    "question": "Which immune cells and antibody class are especially associated with helminth responses?",
    "options": {
      "A": "Neutrophils and IgM only",
      "B": "Eosinophils and IgE",
      "C": "Mature red cells and IgD",
      "D": "Platelets and complement only"
    },
    "answer": "B",
    "explanation": "Type 2 immunity, IgE, mast cells, and eosinophils are prominent in helminth defense. They can also cause allergic inflammation. The response helps expel large parasites but can damage tissue."
  },
  {
    "id": 249,
    "chapter": 27,
    "domain": "parasitic_pathogens",
    "question": "A patient with HIV develops ring-enhancing brain lesions from reactivated Toxoplasma. Which immune defect is central?",
    "options": {
      "A": "Loss of terminal complement proteins",
      "B": "Absence of all neutrophils",
      "C": "Defective red-cell production",
      "D": "Loss of CD4 T-cell immunity"
    },
    "answer": "D",
    "explanation": "Toxoplasma cysts can reactivate when cellular immunity weakens. Advanced HIV is a classic setting. Treatment and prevention depend on immune status."
  },
  {
    "id": 250,
    "chapter": 27,
    "domain": "parasitic_pathogens",
    "question": "Which parasite attaches to the small intestine and causes diarrhea, bloating, and malabsorption?",
    "options": {
      "A": "Plasmodium falciparum in red cells under the conditions described",
      "B": "Strongyloides migrating through lungs only under the conditions described",
      "C": "Cryptococcus growing in cerebrospinal fluid under the conditions described",
      "D": "Giardia lamblia on the intestinal epithelium"
    },
    "answer": "D",
    "explanation": "Giardia attaches to the small-intestinal epithelium and causes malabsorption. It spreads through contaminated water or food. Stool antigen or microscopy can confirm infection."
  },
  {
    "id": 251,
    "chapter": 27,
    "domain": "parasitic_pathogens",
    "question": "Which parasite can cause iron-deficiency anemia by attaching to the intestinal mucosa and feeding on blood?",
    "options": {
      "A": "Giardia lamblia",
      "B": "Hookworm",
      "C": "Toxoplasma gondii",
      "D": "Cryptococcus neoformans"
    },
    "answer": "B",
    "explanation": "Hookworms attach to the intestine and feed on blood. Chronic infection causes iron loss and anemia. Prevention includes footwear, sanitation, and treatment."
  },
  {
    "id": 252,
    "chapter": 27,
    "domain": "parasitic_pathogens",
    "question": "Why can Strongyloides cause severe hyperinfection after corticosteroid treatment?",
    "options": {
      "A": "Steroids directly transform the worm into a bacterium under the conditions described",
      "B": "Steroids provide worms with an alternative oxygen source under the conditions described",
      "C": "Reduced immunity permits increased autoinfection and larval spread",
      "D": "The worm requires corticosteroids for reproduction in all hosts under the conditions described"
    },
    "answer": "C",
    "explanation": "Strongyloides can autoinfect its host. Corticosteroids weaken the immune control that keeps replication low. Screening and treatment before high-dose steroids can prevent hyperinfection."
  },
  {
    "id": 253,
    "chapter": 27,
    "domain": "parasitic_pathogens",
    "question": "Which malaria species can cause severe disease through high parasite burden and infected-cell adhesion?",
    "options": {
      "A": "Giardia lamblia",
      "B": "Toxoplasma gondii only in cats",
      "C": "Plasmodium falciparum",
      "D": "Entamoeba histolytica in the colon"
    },
    "answer": "C",
    "explanation": "P. falciparum infects red cells of all ages and can sequester in capillaries. This contributes to severe malaria. Young children and nonimmune travelers are at high risk."
  },
  {
    "id": 254,
    "chapter": 27,
    "domain": "parasitic_pathogens",
    "question": "Which exposure history is most relevant when a patient develops schistosomiasis?",
    "options": {
      "A": "A recent blood transfusion",
      "B": "Close contact with a person with chickenpox",
      "C": "Freshwater contact in an endemic region",
      "D": "Eating undercooked beef at home"
    },
    "answer": "C",
    "explanation": "Schistosome larvae penetrate skin in freshwater. The worms later live in blood vessels and eggs cause granulomatous disease. Exposure history is a key clue."
  },
  {
    "id": 255,
    "chapter": 27,
    "domain": "parasitic_pathogens",
    "question": "Which symptom pattern fits intestinal ascariasis with a large worm burden?",
    "options": {
      "A": "Intestinal obstruction with abdominal pain and vomiting",
      "B": "Immediate anaphylaxis from a blood transfusion under the conditions described",
      "C": "Isolated hearing loss without systemic symptoms under the conditions described",
      "D": "Painless jaundice from a kidney infection under the conditions described"
    },
    "answer": "A",
    "explanation": "Ascaris adult worms can obstruct the intestine when present in large numbers. Larval migration can also cause pulmonary symptoms. Treatment and supportive care depend on severity."
  },
  {
    "id": 256,
    "chapter": 28,
    "domain": "clinical_syndromes",
    "question": "A patient has spreading warmth, redness, and pain in the deep dermis and subcutaneous tissue. What is the best term?",
    "options": {
      "A": "A sterile transudate",
      "B": "Terminal complement deficiency",
      "C": "A viral hepatitis carrier state",
      "D": "Cellulitis"
    },
    "answer": "D",
    "explanation": "Cellulitis involves the deep dermis and subcutaneous tissue. Streptococcus pyogenes and Staphylococcus aureus are common causes. Severe or rapidly spreading disease needs urgent evaluation."
  },
  {
    "id": 257,
    "chapter": 28,
    "domain": "clinical_syndromes",
    "question": "Which treatment is most important for a large, fluctuant skin abscess?",
    "options": {
      "A": "Only a topical antihistamine",
      "B": "A live vaccine against Staphylococcus",
      "C": "Incision and drainage",
      "D": "Immediate corticosteroid injection"
    },
    "answer": "C",
    "explanation": "An abscess contains a protected collection of pus. Drainage removes the source and improves antibiotic access. Antibiotics may be used when indicated but do not replace drainage."
  },
  {
    "id": 258,
    "chapter": 28,
    "domain": "clinical_syndromes",
    "question": "A patient has severe pain out of proportion to skin findings and rapid systemic toxicity after a minor wound. Which diagnosis must be considered?",
    "options": {
      "A": "Necrotizing soft-tissue infection",
      "B": "Simple allergic rhinitis under the conditions described",
      "C": "A self-limited viral cold under the conditions described",
      "D": "Asymptomatic bacteriuria under the conditions described"
    },
    "answer": "A",
    "explanation": "Necrotizing infection can spread through deep tissue before the skin looks dramatic. Pain may be severe and the skin may become anesthetic. Urgent surgical evaluation and debridement are essential."
  },
  {
    "id": 259,
    "chapter": 28,
    "domain": "clinical_syndromes",
    "question": "Which statement best distinguishes sepsis from bacteremia?",
    "options": {
      "A": "Bacteremia always causes organ failure under the conditions described",
      "B": "A positive blood culture proves septic shock under the conditions described",
      "C": "Sepsis can occur without bacteria in a blood culture",
      "D": "Sepsis is another name for a skin abscess under the conditions described"
    },
    "answer": "C",
    "explanation": "Bacteremia means viable bacteria are in the blood. Sepsis is organ dysfunction caused by a dysregulated response to infection. Blood cultures can be negative in sepsis."
  },
  {
    "id": 260,
    "chapter": 28,
    "domain": "clinical_syndromes",
    "question": "Why is source control important in septic shock from an infected catheter?",
    "options": {
      "A": "Biofilm on the device protects organisms and continues the infection",
      "B": "The catheter directly produces antibodies against the patient under the conditions described",
      "C": "Removing the catheter prevents all antibiotic resistance under the conditions described",
      "D": "The immune system cannot function with any foreign body under the conditions described"
    },
    "answer": "A",
    "explanation": "A device can act as a protected source for organisms. Biofilm reduces drug and immune access. Removing the device may be necessary for cure."
  },
  {
    "id": 261,
    "chapter": 28,
    "domain": "clinical_syndromes",
    "question": "Which organism commonly causes acute infective endocarditis in a person who injects drugs?",
    "options": {
      "A": "Staphylococcus aureus",
      "B": "Giardia lamblia",
      "C": "Pneumocystis jirovecii",
      "D": "Rotavirus"
    },
    "answer": "A",
    "explanation": "Staphylococcus aureus is a common cause of acute endocarditis in this setting. It can infect valves and seed other organs. Blood cultures and echocardiography are important."
  },
  {
    "id": 262,
    "chapter": 28,
    "domain": "clinical_syndromes",
    "question": "What is the main structural problem in infective endocarditis?",
    "options": {
      "A": "Loss of all antibodies from the blood under the conditions described",
      "B": "A vegetation of organisms, platelets, and fibrin on a valve",
      "C": "An intestinal worm obstructing the bile duct under the conditions described",
      "D": "A complement defect limited to the skin under the conditions described"
    },
    "answer": "B",
    "explanation": "Vegetations protect bacteria from phagocytes and antibiotics. They can embolize and damage other organs. Prosthetic material and damaged valves increase risk."
  },
  {
    "id": 263,
    "chapter": 28,
    "domain": "clinical_syndromes",
    "question": "A patient with fever and a central line has blood cultures positive for Staphylococcus epidermidis. Why might line removal be necessary?",
    "options": {
      "A": "The organism cannot grow in the presence of plastic",
      "B": "Biofilm on the catheter protects the bacteria",
      "C": "Antibiotics always fail against skin organisms",
      "D": "The line prevents red cells from carrying oxygen"
    },
    "answer": "B",
    "explanation": "S. epidermidis commonly forms biofilm on devices. The biofilm makes clearance difficult. Clinical judgment and guidance determine whether the line can be salvaged."
  },
  {
    "id": 264,
    "chapter": 28,
    "domain": "clinical_syndromes",
    "question": "Why should antibiotics not be delayed while waiting for blood cultures in suspected septic shock?",
    "options": {
      "A": "Cultures are never useful in sepsis",
      "B": "Delay can increase organ injury and death",
      "C": "Antibiotics improve blood pressure instantly",
      "D": "Bacteria cannot grow in blood culture bottles"
    },
    "answer": "B",
    "explanation": "Early antibiotics and source control improve outcomes in severe infection. Cultures are still obtained when possible. Treatment should not be postponed for a test result."
  },
  {
    "id": 265,
    "chapter": 29,
    "domain": "clinical_syndromes",
    "question": "A patient with fever, flank pain, and urinary frequency has an ascending infection from bladder to kidney. What syndrome is this?",
    "options": {
      "A": "Aspiration pneumonia",
      "B": "Infective endocarditis",
      "C": "Pyelonephritis",
      "D": "Viral hepatitis"
    },
    "answer": "C",
    "explanation": "Flank pain and systemic symptoms suggest upper urinary tract infection. Obstruction can make treatment fail. Imaging may be needed for severe or complicated disease."
  },
  {
    "id": 266,
    "chapter": 29,
    "domain": "clinical_syndromes",
    "question": "A catheterized patient has bacteria in the urine but no urinary symptoms or fever. Which response is most appropriate?",
    "options": {
      "A": "Treat every positive culture with prolonged antibiotics under the conditions described",
      "B": "Consider asymptomatic bacteriuria and review catheter need",
      "C": "Diagnose septic shock immediately under the conditions described",
      "D": "Assume the sample was contaminated by a virus under the conditions described"
    },
    "answer": "B",
    "explanation": "A positive urine culture does not always mean urinary infection. Asymptomatic bacteriuria often does not require treatment. Removing an unnecessary catheter reduces risk."
  },
  {
    "id": 267,
    "chapter": 29,
    "domain": "clinical_syndromes",
    "question": "Why does an endotracheal tube increase the risk of hospital-acquired pneumonia?",
    "options": {
      "A": "It kills all bacteria in the upper airway under the conditions described",
      "B": "It bypasses normal airway clearance and allows colonization",
      "C": "It prevents oxygen from entering the lungs under the conditions described",
      "D": "It directly produces complement in the lung under the conditions described"
    },
    "answer": "B",
    "explanation": "The tube bypasses the mucociliary escalator and allows organisms to reach the lower airway. Secretions can collect above the cuff. Device avoidance and careful care reduce risk."
  },
  {
    "id": 268,
    "chapter": 29,
    "domain": "clinical_syndromes",
    "question": "A patient develops bloody diarrhea and abdominal pain after a foodborne exposure. Which pattern of infection is most concerning?",
    "options": {
      "A": "A purely noninflammatory viral syndrome",
      "B": "An invasive or inflammatory enteric infection",
      "C": "A urinary tract infection limited to the bladder",
      "D": "An isolated allergic reaction to food"
    },
    "answer": "B",
    "explanation": "Blood and mucus suggest inflammation or invasion of the bowel. The organism list differs from watery viral gastroenteritis. Severe illness, dehydration, and systemic toxicity require urgent assessment."
  },
  {
    "id": 269,
    "chapter": 29,
    "domain": "clinical_syndromes",
    "question": "Why is C. difficile infection associated with antibiotic use?",
    "options": {
      "A": "Antibiotics directly convert viruses into bacteria under the conditions described",
      "B": "Antibiotics remove the colon's blood supply under the conditions described",
      "C": "Antibiotics disrupt colonic microbiota and permit toxin-producing growth",
      "D": "Antibiotics neutralize all C. difficile spores permanently under the conditions described"
    },
    "answer": "C",
    "explanation": "Broad antibiotics reduce protective colonic flora. C. difficile can then germinate and produce toxins. Stopping the trigger and giving targeted treatment are important."
  },
  {
    "id": 270,
    "chapter": 29,
    "domain": "clinical_syndromes",
    "question": "Which complication is most directly related to vomiting and diarrhea in acute gastroenteritis?",
    "options": {
      "A": "Volume depletion and electrolyte loss",
      "B": "Immediate hyperacute transplant rejection",
      "C": "MHC class I deficiency",
      "D": "Airborne tuberculosis"
    },
    "answer": "A",
    "explanation": "Gastrointestinal fluid loss can cause dehydration and electrolyte abnormalities. Rehydration is the central treatment. Young children and older adults are especially vulnerable."
  },
  {
    "id": 271,
    "chapter": 29,
    "domain": "clinical_syndromes",
    "question": "Which organism is a common cause of community-acquired pneumonia?",
    "options": {
      "A": "Streptococcus pneumoniae",
      "B": "Giardia lamblia",
      "C": "Clostridioides difficile",
      "D": "Cryptococcus in every healthy adult"
    },
    "answer": "A",
    "explanation": "Streptococcus pneumoniae is a common cause of community-acquired pneumonia. Respiratory viruses also contribute. The patient's severity and setting guide testing and treatment."
  },
  {
    "id": 272,
    "chapter": 29,
    "domain": "clinical_syndromes",
    "question": "Why can a positive sputum culture from a hospitalized patient be difficult to interpret?",
    "options": {
      "A": "Oral colonization and specimen contamination can mislead",
      "B": "Sputum cannot contain bacteria in pneumonia under the conditions described",
      "C": "All positive cultures prove tuberculosis under the conditions described",
      "D": "The laboratory never performs susceptibility testing under the conditions described"
    },
    "answer": "A",
    "explanation": "Sputum passes through the mouth and can be contaminated. Organisms may be colonizers rather than the cause of pneumonia. Clinical, imaging, and specimen-quality findings are needed."
  },
  {
    "id": 273,
    "chapter": 29,
    "domain": "clinical_syndromes",
    "question": "Which patient should be evaluated for obstruction when pyelonephritis does not improve with appropriate antibiotics?",
    "options": {
      "A": "A patient with only a mild cold under the conditions described",
      "B": "A patient with a healing superficial scrape under the conditions described",
      "C": "A patient with seasonal allergic rhinitis under the conditions described",
      "D": "A patient with a kidney stone or urinary retention"
    },
    "answer": "D",
    "explanation": "Obstruction prevents drainage and can keep infection active despite antibiotics. Imaging may reveal a stone or hydronephrosis. Source control may require drainage."
  },
  {
    "id": 274,
    "chapter": 30,
    "domain": "treatment",
    "question": "What does selective toxicity mean for an antimicrobial drug?",
    "options": {
      "A": "It harms the microbe more than human cells",
      "B": "It kills every microbe and every human cell equally",
      "C": "It works only against viruses",
      "D": "It never causes an adverse effect"
    },
    "answer": "A",
    "explanation": "Selective toxicity depends on a target that differs between the pathogen and the host. Bacterial cell walls and fungal ergosterol are examples. Human toxicity can still occur."
  },
  {
    "id": 275,
    "chapter": 30,
    "domain": "treatment",
    "question": "A bacterium produces an enzyme that destroys a beta-lactam antibiotic. Which resistance mechanism is this?",
    "options": {
      "A": "Target amplification under the conditions described",
      "B": "MHC class I loss under the conditions described",
      "C": "Enzymatic drug inactivation",
      "D": "Opsonization under the conditions described"
    },
    "answer": "C",
    "explanation": "Beta-lactamases hydrolyze the drug's active structure. Extended-spectrum enzymes can affect many beta-lactams. Resistance genes can spread between bacteria."
  },
  {
    "id": 276,
    "chapter": 30,
    "domain": "treatment",
    "question": "What is antimicrobial stewardship?",
    "options": {
      "A": "Choosing the right drug, dose, route, and duration",
      "B": "Avoiding antibiotics in all patients with fever under the conditions described",
      "C": "Using the newest drug for every infection under the conditions described",
      "D": "Replacing cultures with patient preference under the conditions described"
    },
    "answer": "A",
    "explanation": "Stewardship aims to optimize treatment and reduce unnecessary use. It includes de-escalation and stopping drugs when infection is unlikely. It also protects patients from toxicity."
  },
  {
    "id": 277,
    "chapter": 30,
    "domain": "treatment",
    "question": "Which adverse effect is strongly associated with broad-spectrum antibiotic use?",
    "options": {
      "A": "Immediate formation of autoantibodies in all patients",
      "B": "Permanent loss of all B cells",
      "C": "Disruption of normal microbiota and C. difficile risk",
      "D": "Development of MHC class II deficiency"
    },
    "answer": "C",
    "explanation": "Broad antibiotics can alter protective flora and allow C. difficile overgrowth. They can also select resistant organisms. The patient's ecology matters."
  },
  {
    "id": 278,
    "chapter": 30,
    "domain": "treatment",
    "question": "Which statement about the minimum inhibitory concentration is accurate?",
    "options": {
      "A": "It proves the patient will be cured regardless of drug levels under the conditions described",
      "B": "It is the lowest drug concentration that prevents visible growth",
      "C": "It measures the patient's antibody response under the conditions described",
      "D": "It is the dose printed on every prescription bottle under the conditions described"
    },
    "answer": "B",
    "explanation": "MIC is a laboratory measure of drug activity against an organism. It does not guarantee cure at the infection site. Drug exposure, source control, and host immunity matter."
  },
  {
    "id": 279,
    "chapter": 30,
    "domain": "treatment",
    "question": "Why are multiple drugs used to treat tuberculosis rather than a single active drug?",
    "options": {
      "A": "Multiple drugs reduce selection of resistant mutants",
      "B": "Only one drug can enter the lung at a time",
      "C": "Tuberculosis is caused by a virus without drug targets",
      "D": "Combination therapy removes the need for adherence"
    },
    "answer": "A",
    "explanation": "Mycobacteria can develop resistance through mutation. Several drugs reduce the chance that resistant organisms survive. Treatment also requires adequate duration and follow-up."
  },
  {
    "id": 280,
    "chapter": 30,
    "domain": "treatment",
    "question": "Why can antibiotic treatment fail in an abscess even when the organism is susceptible in the laboratory?",
    "options": {
      "A": "Antibiotics cannot enter human tissue",
      "B": "Pus and poor blood flow reduce drug delivery",
      "C": "Susceptibility tests always use the wrong bacteria",
      "D": "Neutrophils destroy every antibiotic in the body"
    },
    "answer": "B",
    "explanation": "The local environment can prevent effective drug concentrations. Drainage removes pus and improves access. Source control is a key part of treatment."
  },
  {
    "id": 281,
    "chapter": 30,
    "domain": "treatment",
    "question": "Which statement explains why unnecessary antibiotics can be harmful even when the patient recovers?",
    "options": {
      "A": "They cause no ecological or long-term effects under the conditions described",
      "B": "They always improve the normal microbiota under the conditions described",
      "C": "They prevent all future infections under the conditions described",
      "D": "They select resistance and disturb protective microbiota"
    },
    "answer": "D",
    "explanation": "Antibiotics can select resistant organisms and disrupt normal flora. The effect can persist after the prescription ends. Avoiding unnecessary treatment protects the patient and the community."
  },
  {
    "id": 282,
    "chapter": 30,
    "domain": "treatment",
    "question": "What is the main rationale for de-escalating antibiotic therapy?",
    "options": {
      "A": "Broad therapy always improves the immune response under the conditions described",
      "B": "The organism becomes more resistant when the spectrum narrows under the conditions described",
      "C": "De-escalation means stopping all treatment immediately under the conditions described",
      "D": "Narrow therapy can reduce resistance and toxicity once data are available"
    },
    "answer": "D",
    "explanation": "De-escalation uses culture and clinical data to narrow treatment. It reduces collateral damage and resistance selection. The patient must still receive adequate coverage."
  },
  {
    "id": 283,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "A highly sensitive test is negative in a patient. What does this result most strongly suggest?",
    "options": {
      "A": "The patient definitely has the disease under the conditions described",
      "B": "The test should be ignored in all situations under the conditions described",
      "C": "The patient has a complement deficiency under the conditions described",
      "D": "The disease is unlikely, though test limitations remain"
    },
    "answer": "D",
    "explanation": "Sensitivity measures how often a test is positive in disease. A highly sensitive test is useful for ruling out disease when negative. Timing and specimen quality can still cause false-negative results."
  },
  {
    "id": 284,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "Why can a test have a low positive predictive value in a low-prevalence population?",
    "options": {
      "A": "There are relatively more false positives when disease is uncommon",
      "B": "All positive tests become false in low-risk groups under the conditions described",
      "C": "Prevalence has no effect on predictive value under the conditions described",
      "D": "Sensitivity always falls to zero in low-risk groups under the conditions described"
    },
    "answer": "A",
    "explanation": "Predictive value depends on prevalence. When disease is rare, false positives can make up a larger share of positive results. Screening should target appropriate populations."
  },
  {
    "id": 285,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "Which test can detect HIV before antibodies become positive?",
    "options": {
      "A": "A bacterial culture of sputum",
      "B": "HIV nucleic acid testing",
      "C": "A skin prick allergy test",
      "D": "A rheumatoid factor assay"
    },
    "answer": "B",
    "explanation": "HIV RNA can be detected before antibody seroconversion. Acute HIV has high viral load and transmission risk. Timing is central to test interpretation."
  },
  {
    "id": 286,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "What is the main advantage of culture over rapid antigen testing?",
    "options": {
      "A": "Culture always returns results within minutes under the conditions described",
      "B": "Culture is never affected by prior antibiotics under the conditions described",
      "C": "Culture can provide organism identification and susceptibility",
      "D": "Culture detects only human immune cells under the conditions described"
    },
    "answer": "C",
    "explanation": "Culture can identify organisms and test drug susceptibility. It may take longer and can be negative after antibiotics. Rapid tests trade some information for speed."
  },
  {
    "id": 287,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "What is the main mechanism of rituximab?",
    "options": {
      "A": "Blockade of the IL-6 receptor",
      "B": "Depletion of CD20-positive B cells",
      "C": "Blockade of the terminal complement protein C5",
      "D": "Inhibition of bacterial cell-wall synthesis"
    },
    "answer": "B",
    "explanation": "Rituximab targets CD20 and depletes B cells. It is used in some autoimmune diseases and lymphomas. Infection risk and vaccine response require monitoring."
  },
  {
    "id": 288,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "Which drug directly blocks an inhibitory checkpoint on T cells?",
    "options": {
      "A": "An anti-PD-1 antibody",
      "B": "Penicillin under the conditions described",
      "C": "Vancomycin under the conditions described",
      "D": "Aminoglycoside under the conditions described"
    },
    "answer": "A",
    "explanation": "PD-1 is an inhibitory receptor on T cells. Blocking it can increase antitumor activity. The same treatment can cause immune-related tissue damage."
  },
  {
    "id": 289,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "Why are vaccines reviewed before starting B-cell-depleting therapy?",
    "options": {
      "A": "Vaccines remove all need for B cells permanently under the conditions described",
      "B": "B-cell depletion makes all vaccines dangerous immediately under the conditions described",
      "C": "The response may be better before immune suppression begins",
      "D": "Vaccination cannot influence any immune response under the conditions described"
    },
    "answer": "C",
    "explanation": "Some vaccine responses are stronger before B cells are depleted. Live vaccine safety depends on the degree of immunosuppression. Timing requires specialist planning."
  },
  {
    "id": 290,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "A patient on a C5 inhibitor has a higher risk of which infection?",
    "options": {
      "A": "Neisserial infection",
      "B": "Tetanus from a clean wound",
      "C": "A common cold only",
      "D": "Hepatitis A without exposure"
    },
    "answer": "A",
    "explanation": "C5 blockade prevents terminal complement lysis. Neisseria is especially vulnerable to that pathway. Meningococcal vaccination and urgent fever evaluation are important."
  },
  {
    "id": 291,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "Which monitoring is most relevant before starting a TNF inhibitor?",
    "options": {
      "A": "Screening for latent tuberculosis",
      "B": "Testing for influenza antibody only",
      "C": "Measuring urinary glucose only",
      "D": "Testing visual acuity only"
    },
    "answer": "A",
    "explanation": "TNF blockade can reactivate latent tuberculosis. Screening and preventive treatment reduce this risk. Vaccination and infection history are also reviewed."
  },
  {
    "id": 292,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "Which statement best describes a monoclonal antibody?",
    "options": {
      "A": "A mixture of antibodies with many unknown targets under the conditions described",
      "B": "A live attenuated vaccine strain under the conditions described",
      "C": "A bacterial enzyme that destroys beta-lactams under the conditions described",
      "D": "A laboratory-produced antibody with one defined target"
    },
    "answer": "D",
    "explanation": "Monoclonal antibodies bind one specific target. They can block receptors, deplete cells, or recruit immune functions. Their effects depend on the target and the antibody format."
  },
  {
    "id": 293,
    "chapter": 31,
    "domain": "clinical_immunology",
    "question": "Why is a tissue biopsy sometimes more useful than a superficial swab?",
    "options": {
      "A": "A biopsy can show invading organisms and tissue response",
      "B": "A swab always kills the organism before culture under the conditions described",
      "C": "Tissue biopsy cannot be examined by microscopy under the conditions described",
      "D": "Superficial swabs never detect bacteria under the conditions described"
    },
    "answer": "A",
    "explanation": "A biopsy samples the actual infected tissue and can show inflammation, invasion, and organisms. Superficial swabs may only show colonizers. The procedure must be safe and appropriate."
  },
  {
    "id": 294,
    "chapter": 32,
    "domain": "prevention",
    "question": "Which prevention measure most directly interrupts transmission from contaminated hands?",
    "options": {
      "A": "Measuring blood pressure more frequently",
      "B": "Hand hygiene at the correct moments",
      "C": "Avoiding all vaccines after exposure",
      "D": "Increasing antibiotic use for mild symptoms"
    },
    "answer": "B",
    "explanation": "Hand hygiene removes or kills organisms on hands and interrupts transmission. It is a core standard precaution. The timing of hand hygiene matters."
  },
  {
    "id": 295,
    "chapter": 32,
    "domain": "prevention",
    "question": "Which vaccine type is usually avoided in severe immunodeficiency because it can replicate?",
    "options": {
      "A": "A toxoid vaccine under the conditions described",
      "B": "A live attenuated vaccine",
      "C": "A subunit vaccine under the conditions described",
      "D": "An inactivated vaccine under the conditions described"
    },
    "answer": "B",
    "explanation": "Live attenuated vaccines contain weakened organisms that can replicate. Severe immunodeficiency can permit uncontrolled infection. Specialist guidance determines vaccine safety."
  },
  {
    "id": 296,
    "chapter": 32,
    "domain": "prevention",
    "question": "What is the purpose of an adjuvant in a vaccine?",
    "options": {
      "A": "To replace all B and T cells with antibodies",
      "B": "To prevent any immune response from occurring",
      "C": "To sterilize the patient's skin permanently",
      "D": "To strengthen or shape the immune response"
    },
    "answer": "D",
    "explanation": "Adjuvants can activate innate immunity or alter antigen presentation. They may improve antibody or T-cell responses. They can also increase local reactions."
  },
  {
    "id": 297,
    "chapter": 32,
    "domain": "prevention",
    "question": "Why can a conjugate vaccine create stronger memory than a pure polysaccharide vaccine?",
    "options": {
      "A": "The polysaccharide becomes a live virus",
      "B": "The carrier protein activates complement only in infants",
      "C": "The vaccine removes the need for B cells",
      "D": "The carrier protein recruits T-cell help for B cells"
    },
    "answer": "D",
    "explanation": "Carrier peptides are presented to T cells, which provide help to polysaccharide-specific B cells. This supports germinal centers and memory. It is especially useful in young children."
  },
  {
    "id": 298,
    "chapter": 32,
    "domain": "prevention",
    "question": "What is herd immunity?",
    "options": {
      "A": "A single person's antibody level after vaccination under the conditions described",
      "B": "A method for sterilizing hospital equipment under the conditions described",
      "C": "Indirect protection when enough people are immune to reduce transmission",
      "D": "The use of antibiotics in healthy animals only under the conditions described"
    },
    "answer": "C",
    "explanation": "Herd immunity reduces transmission chains within a population. It can protect people who cannot be vaccinated. The threshold depends on the pathogen and population mixing."
  },
  {
    "id": 299,
    "chapter": 32,
    "domain": "prevention",
    "question": "Which action most directly reduces device-associated infection in a hospital?",
    "options": {
      "A": "Leaving every catheter in place until discharge under the conditions described",
      "B": "Reviewing device need and removing unnecessary devices",
      "C": "Using broad antibiotics for every febrile patient under the conditions described",
      "D": "Stopping hand hygiene during high workload under the conditions described"
    },
    "answer": "B",
    "explanation": "Devices create portals and surfaces for biofilm. Daily review and prompt removal reduce exposure. Hand hygiene and careful insertion add further protection."
  },
  {
    "id": 300,
    "chapter": 32,
    "domain": "prevention",
    "question": "Why is antimicrobial stewardship part of infection prevention?",
    "options": {
      "A": "Antibiotics kill all pathogens without selecting resistance",
      "B": "Stewardship eliminates the need for hand hygiene",
      "C": "It prevents every patient from needing a vaccine",
      "D": "It reduces selection pressure and protects useful drugs"
    },
    "answer": "D",
    "explanation": "Unnecessary antibiotics select resistant organisms and disturb protective microbiota. Stewardship preserves drug effectiveness. It works together with vaccination, hygiene, and device care."
  }
];
